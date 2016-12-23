package com.gft.service;

import com.gft.util.TreeConverter;
import rx.Observable;
import rx.Subscriber;
import rx.subjects.ReplaySubject;

import java.io.IOException;
import java.nio.file.*;
import java.util.Map;
import java.util.concurrent.*;

import static java.nio.file.StandardWatchEventKinds.ENTRY_CREATE;
import static java.nio.file.StandardWatchEventKinds.ENTRY_DELETE;
import static java.nio.file.StandardWatchEventKinds.ENTRY_MODIFY;

public final class DirectoryWatcher {

    /**
     * Map has object of path, that observer will watch and CompletableFuture object, that will be call when
     * some event happened.
     */
    private final Map<Path,Subscriber> registeredSubscribers = new ConcurrentHashMap<>();

    private WatchService watcher = null;

    /**
     * Object hold all emitted elements from watched path.
     * In case when new observer will registered, then it get all elements filtered by declared path.
     */
    private final ReplaySubject<Path> replaySubject = ReplaySubject.create();

    private final Thread watcherThread = new Thread(this::producePathsFromFileSystem);

    private void producePathsFromFileSystem(){
        while (!watcherThread.isInterrupted() && watcher!= null) {
            try {
                WatchKey key = watcher.take();
                if (key == null) {
                    break;
                }
                for (WatchEvent<?> event : key.pollEvents()) {
                    final Path dir = (Path)key.watchable();
                    final Path fullPath = dir.resolve((Path)event.context());

                    registeredSubscribers.keySet()
                        .stream()
                        .filter(registeredPath -> fullPath.toAbsolutePath().startsWith(registeredPath))
                        .forEach(registeredPath -> {
                                if (event.kind().equals(ENTRY_CREATE)){
                                    registeredSubscribers.get(registeredPath).onNext(fullPath.toAbsolutePath());
                                    replaySubject.onNext(fullPath.toAbsolutePath());
                                }
                                if (Files.isDirectory(fullPath)){
                                    try {
                                        fullPath.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                                    } catch (IOException ignored) {}
                                }
                            }
                        );
                }
                if (!key.reset()) {
                    break;
                }
            } catch (final InterruptedException e) {
                System.out.println("Interrupted while waiting for a watch event; stopping.");
                watcherThread.interrupt();
            } catch (final ClosedWatchServiceException e) {
                System.out.println("Stopped processing watch events; watcher has been closed.");
                break;
            }
        }
    }

    /**
     *
     * @param path - path to watch
     * @return - observable with all emitted elements
     */
    public Observable<Path> register(Path path) {
        if (!Files.isDirectory(path))
            throw new IllegalStateException("Can register only directory.");

        prepareAndStartWatcher(path);

        return Observable.merge(
                Observable.using(
                        () -> path,
                        (clientPath) -> Observable.create(subscriber -> registeredSubscribers.put(path,subscriber)),
                        (clientPath) -> {
                            if (registeredSubscribers.containsKey(clientPath)) {
                                registeredSubscribers.remove(clientPath);
                            }
                            if (registeredSubscribers.size() == 0) {
                                closeWatcher();
                            }
                        }),
                replaySubject.filter( filterPath -> filterPath.toAbsolutePath().startsWith(path))
        ).distinct();
    }

    /**
     * 
     * @param path - path as root 
     */
    // FIXME: 2016-12-23 zmienić na jeden katalog, będzie błąd jak pierw podamy niższy katalog, a potem spróbujemy główny
    private void prepareAndStartWatcher(Path path){
        if (watcher == null) {
            try {
                watcher = path.getFileSystem().newWatchService();
                path.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                for (Path tmpPath : new TreeConverter<>(FileService.convertPathToNode(path))) {
                    if (Files.isDirectory(tmpPath)) {
                        tmpPath.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                        replaySubject.onNext(tmpPath.toAbsolutePath());
                    }
                }
            } catch (IOException e) {
                e.printStackTrace();
            }

            replaySubject.subscribe( _path -> registeredSubscribers.keySet()
                    .stream()
                    .filter(registeredPath -> _path.toAbsolutePath().startsWith(registeredPath))
                    .forEach(registeredPath -> registeredSubscribers.get(registeredPath).onNext(_path.toAbsolutePath())
                    ));
            watcherThread.start();
        }
    }

    /**
     * Close watcher service if is working and interrupting watcher thread.
     */
    private void closeWatcher(){
        try {
            if (watcher != null) {
                watcher.close();
                watcher = null;
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        watcherThread.interrupt();
    }

}

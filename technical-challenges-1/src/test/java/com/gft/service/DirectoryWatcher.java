package com.gft.service;

import com.gft.util.TreeConverter;
import rx.Observable;
import rx.Scheduler;
import rx.Subscriber;
import rx.functions.Action0;
import rx.schedulers.Schedulers;
import rx.subjects.ReplaySubject;

import java.io.IOException;
import java.nio.file.*;
import java.util.Date;
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
    private Map<Path,Subscriber> registeredSubscribers = new ConcurrentHashMap<>();
    // FIXME: 2016-12-21 sposób na zamykanie strumienia watchera
    private WatchService watcher = null;

    /**
     * Object hold all emitted elements from watched path.
     * In case when new observer will registered, then it get all elements filtered by declared path.
     */
    private final ReplaySubject<Path> replaySubject = ReplaySubject.create();

    private Thread watcherThread = new Thread(() ->producePathsFromFileSystem());

    private void producePathsFromFileSystem(){
        while (!watcherThread.isInterrupted()) {
            try {
                WatchKey key = watcher.take();
                if (key == null) {
                    throw new IOException("Watcher returned WatchKey that is null");
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
                                    } catch (IOException e) {}
                                }
                            }
                        );
                }
                if (!key.reset()) {
                    break;
                }
            } catch (final InterruptedException e) {
                System.out.println("Interrupted while waiting for a watch event; stopping.");
                // Preserve the interrupt flag.
                watcherThread.interrupt();
            } catch (final ClosedWatchServiceException e) {
                System.out.println("Stopped processing watch events; watcher has been closed.");
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public Observable<Path> register(Path path) {
        if (!Files.isDirectory(path))
            throw new IllegalStateException("Can register only directory.");

        if (watcher == null) {
            try {
                watcher = path.getFileSystem().newWatchService();
                path.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                for (Path tmpPath : new TreeConverter<>(FileService.convertPathToNode(path))) {
                    if (Files.isDirectory(tmpPath))
                        try {
                            tmpPath.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    replaySubject.onNext(tmpPath.toAbsolutePath());
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

        return Observable.merge(
                Observable.using(
                        () -> path,
                        (clientPath) -> Observable.create(subscriber -> registeredSubscribers.put(path,subscriber)),
                        (clientPath) -> {
                            if (registeredSubscribers.containsKey(clientPath)) {
                                registeredSubscribers.remove(clientPath);
                            }

                            if (registeredSubscribers.size() == 0) {
                                System.out.println("zamykanie: " + registeredSubscribers.size());

                                try {
                                    watcher.close();
                                    watcher = null;
                                } catch (IOException e) {
                                    e.printStackTrace();
                                }
                                watcherThread.interrupt();

                            }


                        }),
                replaySubject.filter( filterPath -> filterPath.toAbsolutePath().startsWith(path))
        ).distinct();
    }

}

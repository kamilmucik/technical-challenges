package com.gft.service;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import com.gft.util.TreeConverter;
import rx.Observable;
import rx.Subscriber;
import rx.functions.Action1;
import rx.functions.Func0;
import rx.functions.Func1;
import rx.schedulers.Schedulers;
import rx.subjects.ReplaySubject;

import java.io.IOException;
import java.nio.file.*;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.*;
import java.util.concurrent.atomic.AtomicLong;

import static java.nio.file.StandardWatchEventKinds.ENTRY_CREATE;
import static java.nio.file.StandardWatchEventKinds.ENTRY_DELETE;
import static java.nio.file.StandardWatchEventKinds.ENTRY_MODIFY;

public final class DirectoryWatcher {

    /**
     * Map has object of path, that observer will watch and CompletableFuture object, that will be call when
     * some event happened.
     */
    private Map<Path,Subscriber> registredSubscribers = new ConcurrentHashMap<>();
    private WatchService watcher = null;
    private Thread watcherThread = new Thread(() ->producePathsFromFileSystem());

    private final ReplaySubject<Path> replaySubject = ReplaySubject.create();

    final ScheduledExecutorService scheduler = Executors.newScheduledThreadPool(1);
    final ExecutorService executor = Executors.newFixedThreadPool(1);


    private void producePathsFromFileSystem(){
        while (!watcherThread.isInterrupted() || Thread.currentThread().isInterrupted()) {
            try {
                WatchKey key = watcher.take();
                if (key == null) {
                    throw new IOException("Watcher returned WatchKey that is null");
                }
                for (WatchEvent<?> event : key.pollEvents()) {
                    final Path dir = (Path)key.watchable();
                    final Path fullPath = dir.resolve((Path)event.context());

                    registredSubscribers.keySet()
                            .stream()
                            .filter(registredPath -> fullPath.toAbsolutePath().startsWith(registredPath))
                            .forEach(registredPath -> {
                                    if (event.kind().equals(ENTRY_CREATE)){
                                        registredSubscribers.get(registredPath).onNext(fullPath.toAbsolutePath());
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
            } catch (Throwable t) {
                t.printStackTrace();
            }
        }
    }

    public void execute(){
        executor.submit(scheduleTask());
    }

    public Runnable scheduleTask(){
        return new Runnable() {
            public void run() {
                final ScheduledFuture cancel = scheduler.scheduleAtFixedRate(new Runnable() {
                    public void run() {
                        try {
                            WatchKey key = watcher.take();
                            if (key != null) {
                                for (WatchEvent<?> event : key.pollEvents()) {
                                    final Path dir = (Path)key.watchable();
                                    final Path fullPath = dir.resolve((Path)event.context());

                                    if (event.kind().equals(ENTRY_CREATE)){
                                        System.out.println(event + " : " + fullPath.toAbsolutePath());
                                        replaySubject.onNext(fullPath.toAbsolutePath());
                                    }
                                    if (Files.isDirectory(fullPath)){
                                        try {
                                            fullPath.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                                        } catch (IOException e) {}
                                    }

                                }
                                if (!key.reset()) {
//                                break;
                                }
                            }

                        } catch (Throwable t) {
                            t.printStackTrace();
                        }
                    }
                }, 0, 1, TimeUnit.SECONDS);
                scheduler.schedule(new Runnable() {
                    public void run() {
                        cancel.cancel(true);
                        execute();
                    }
                }, 1, TimeUnit.MINUTES);
            }
        };
    }


    public Observable<Path> register2(Path path) {
        if (!Files.isDirectory(path))
            throw new IllegalStateException("Can register only directory.");

        if (watcher == null) {
            try {
                watcher = path.getFileSystem().newWatchService();
                path.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                Node<Path> root = FileService.convertPathToNode(path);
                Iterator<Path> it = new TreeConverter<>(root).iterator();
                while (it.hasNext()) {
                    Path tmpPath = it.next();

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

            replaySubject.subscribe( _path -> {
                registredSubscribers.keySet()
                    .stream()
                    .filter(registredPath -> _path.toAbsolutePath().startsWith(registredPath))
                    .forEach(registredPath -> {
                             registredSubscribers.get(registredPath).onNext(_path.toAbsolutePath());
                            }
                    );
            });
        }
        execute();



        return Observable.using(
                () -> path,
                (clientPath) -> {
                    return Observable.create((Observable.OnSubscribe<Path>) subscriber -> {
                        registredSubscribers.put(path,subscriber);
                        replaySubject.subscribe(new Action1<Path>() {
                            @Override
                            public void call(Path path) {
                                if (path.toAbsolutePath().startsWith(clientPath)) {
//                                    System.out.println("po rejestracji: " + clientPath + " : " + path);
//                                    subscriber.onNext(path);
                                }
                            }
                        });

                    });
                },
                (clientPath) -> {
                    if (registredSubscribers.containsKey(clientPath)) {
                        registredSubscribers.remove(clientPath);
                    }
                });
    }


    /**
     * Register CustomSubscriber subscriber object.
     *
     * @param path
     * @throws  IllegalStateException
     *          In the case of the set Path object is not directory.
     */
    public Observable<Path> register(Path path) {
        if (!Files.isDirectory(path))
            throw new IllegalStateException("Can register only directory.");

        Func0<Path> resourceFactory = () -> {
            if (watcher == null)
                try {
                    watcher = path.getFileSystem().newWatchService();
                    path.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            System.out.println(Thread.currentThread().getName() + ": Created and started the client.");
            return path;
        };
        Func1<Path, Observable<Path>> observableFactory = (clientPath) -> {
            System.out.println(Thread.currentThread().getName() + " : " + clientPath + " : About to create Observable.");


            return Observable.create((Observable.OnSubscribe<Path>) subscriber -> {
                if (registredSubscribers.size() == 0 ){
                    watcherThread.start();
                }
                registredSubscribers.put(path,subscriber);

                Node<Path> root = FileService.convertPathToNode(path);
                Iterator<Path> it = new TreeConverter<>(root).iterator();
                while (it.hasNext()) {
                    Path tmpPath = it.next();

                    if (Files.isDirectory(tmpPath))
                        try {
                            tmpPath.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                        } catch (IOException e) {
                            e.printStackTrace();
                        }
                    subscriber.onNext(tmpPath.toAbsolutePath());
                }
            });
        };
        Action1<Path> disposeAction = (clientPath) -> {
            if (registredSubscribers.containsKey(clientPath)) {
                registredSubscribers.remove(clientPath);
            }
            if (registredSubscribers.size() == 0 ){
//                watcherThread.interrupt();

                try {
                    watcher.close();

                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            System.out.println(Thread.currentThread().getName() + " : " + clientPath + " : Closing the client.");
        };

        return Observable.using(
                resourceFactory,
                observableFactory,
                disposeAction);

    }

}

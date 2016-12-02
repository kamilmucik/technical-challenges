package com.gft.service;

import rx.Observable;
import rx.Scheduler;
import rx.Subscriber;
import rx.functions.Action0;
import rx.schedulers.Schedulers;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.Date;
import java.util.concurrent.TimeUnit;

public class DirectoryWatcher {
    private static WatchService watcher;
    private static volatile boolean close = false;
    private static Scheduler scheduler = Schedulers.computation();


    /**
     * Method return new created paths.
     * @param root path
     * @return Observable <Path> stream
     */
    public static Observable<Path> changed(Path root) throws IOException {
        watcher = root.getFileSystem().newWatchService();
//        root.register(watcher, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_DELETE, StandardWatchEventKinds.ENTRY_MODIFY);
        registerRecursive(root,watcher);
        Observable.OnSubscribe<Path> subscribeFunction = DirectoryWatcher::asyncProcessingOnSubscribe;
        return Observable.create(subscribeFunction);
    }

    /**
     * Method start new thread and invoke method to produce paths
     * @param s is subscriber with Path type
     */
    private static void asyncProcessingOnSubscribe(Subscriber<? super Path> s) {
        final Subscriber<? super Path> subscriber = s;
        Thread thread = new Thread(() -> producePathsFromFileSystem(subscriber));
        thread.start();
    }

    /**
     * Method produce Path from watched service
     * @param subscriber Path
     */
    private static void producePathsFromFileSystem(Subscriber<? super Path> subscriber) {
        final Scheduler.Worker worker = scheduler.createWorker();
        subscriber.add(worker);

        worker.schedule(() -> {
            System.out.println("d.2: " + new Date());
            subscriber.onNext(Paths.get("d1") );
//            subscriber.unsubscribe();
//            worker.unsubscribe();
//            do {
//                try {
//                    WatchKey key = watcher.take();
//                    if (key == null) {
//                        continue;
//                    }
//
//                    for (WatchEvent<?> event : key.pollEvents()) {
//                        Path tmp = (Path)event.context();
//
//                        System.out.println("d.1: " + tmp + " : " + Files.isDirectory(tmp));
////                    if (Files.isDirectory(tmp)){
////                        registerRecursive(tmp,watcher);
////                    }
//                        System.out.println("d.2: " + tmp);
//
//                        subscriber.onNext(tmp.toAbsolutePath() );
//                    }
//
//                    if (!key.reset()) {
//                        close();
//                    }
//                } catch (Throwable t) {
////                    t.printStackTrace();
//                    subscriber.onError(t);
//                }
//            } while (!close);
//            subscriber.onCompleted();
        }, 200, TimeUnit.MILLISECONDS );


    }

    /**
     * Method close watcher service. It must be invoke to stop infinity watch loop.
     */
    private static void close() {
        close = true;
        try {
            watcher.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    private static void registerRecursive(final Path root,WatchService watcher) throws IOException {
        Files.walkFileTree(root, new SimpleFileVisitor<Path>() {
            @Override
            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
//                System.out.println("d: " + dir);
                dir.register(watcher, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_DELETE, StandardWatchEventKinds.ENTRY_MODIFY);
//                watchedPaths.add(dir);
                return FileVisitResult.CONTINUE;
            }
            @Override
            public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) {
//                System.out.println("f: " + path);
                return FileVisitResult.CONTINUE;
            }
        });
    }
}

package com.gft.service;

import rx.Observable;
import rx.Scheduler;
import rx.Subscriber;
import rx.schedulers.Schedulers;

import javax.swing.tree.FixedHeightLayoutCache;
import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.concurrent.TimeUnit;

public final class DirectoryWatcher {

    private  volatile boolean close = false;
    private  Scheduler scheduler = Schedulers.io();
    // FIXME: 2016-12-06 Add list of subscribers and notify them when something is happend
    // FIXME: 2016-12-06 Propose strategy of close

    /**
     * Method return new created paths, and add subscribes to subscribersList
     * @param root path
     * @return Observable <Path> stream
     */
    public static Observable<Path> changed(Path root) throws IOException {
        // FIXME: 2016-12-06 need to by closed
        WatchService watcher = root.getFileSystem().newWatchService();
        root.register(watcher, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_MODIFY);
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
//        final Scheduler.Worker worker = scheduler.createWorker();
//        subscriber.add(worker);
//
//        worker.schedule(() -> {
////            do {
//                try {
//                    WatchKey key = watcher.take();
//                    if (key == null) {
//
//                        throw new IOException("Watcher returned WatchKey that is null");
//                    }
//                    for (WatchEvent<?> event : key.pollEvents()) {
//                        Path tmp = (Path)event.context();
//                        if (Files.isDirectory(tmp) && (StandardWatchEventKinds.ENTRY_CREATE.equals(event.kind()) || StandardWatchEventKinds.ENTRY_MODIFY.equals(event.kind()) )){
//                            Files.walkFileTree(tmp, new SimpleFileVisitor<Path>() {
//                                @Override
//                                public FileVisitResult preVisitDirectory(Path path, BasicFileAttributes attrs) throws IOException {
//                                    path.register(watcher, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_DELETE, StandardWatchEventKinds.ENTRY_MODIFY);
//                                    subscriber.onNext(path.toAbsolutePath() );
//                                    return FileVisitResult.CONTINUE;
//                                }
//                                @Override
//                                public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) {
//                                    subscriber.onNext(path.toAbsolutePath() );
//                                    return FileVisitResult.CONTINUE;
//                                }
//                            });
//                        } else {
//                            subscriber.onNext(tmp.toAbsolutePath() );
//                        }
//                    }
//                    if (!key.reset()) {
//                        close();
//                    }
//                } catch (Throwable t) {
//                    subscriber.onError(t);
//                }
////            } while (!close);
//            subscriber.onCompleted();
//        }, 200, TimeUnit.MILLISECONDS );
    }

    /**
     * Method close watcher service. It must be invoke to stop infinity watch loop.
     */
    private static void close() {
//        close = true;
//        try {
//            watcher.close();
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
    }
}

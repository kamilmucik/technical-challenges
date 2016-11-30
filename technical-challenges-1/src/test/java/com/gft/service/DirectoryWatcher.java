package com.gft.service;

import rx.Observable;
import rx.Subscriber;

import java.io.IOException;
import java.nio.file.*;

public class DirectoryWatcher {
    private static WatchService watcher;
    private static volatile boolean close = false;

    /**
     * Method return new created paths.
     * @param root path
     * @return Observable <Path> stream
     */
    public static Observable<Path> changed(Path root) throws IOException {
        watcher = root.getFileSystem().newWatchService();
        root.register(watcher, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_DELETE, StandardWatchEventKinds.ENTRY_MODIFY);
        Observable.OnSubscribe<Path> subscribeFunction = DirectoryWatcher::asyncProcessingOnSubscribe;
        return Observable.create(subscribeFunction);
    }

    /**
     * Method start new thread and invoke method to produce paths
     * @param s is subscriber with Path type
     */
    private static void asyncProcessingOnSubscribe(Subscriber s) {
        final Subscriber<Path> subscriber = s;
        Thread thread = new Thread(() -> producePathsFromFileSystem(subscriber));
        thread.start();
    }

    /**
     * Method produce Path from watched service
     * @param subscriber Path
     */
    private static void producePathsFromFileSystem(Subscriber<Path> subscriber) {
        do {
            try {
                WatchKey key = watcher.take();
                if (key == null) {
                    continue;
                }

                for (WatchEvent<?> event : key.pollEvents()) {
                    subscriber.onNext(((Path)event.context()).toAbsolutePath() );
                }

                if (!key.reset()) {
                    close();
                }
            } catch (Throwable t) {
                t.printStackTrace();
                subscriber.onError(t);
            }
        } while (!close);
        subscriber.onCompleted();
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

//    private static void registerRecursive(final Path root,WatchService watcher) throws IOException {
//        // register all subfolders
//        Files.walkFileTree(root, new SimpleFileVisitor<Path>() {
//            @Override
//            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException {
//                System.out.println("d: " + dir);
////                dir.register(watcher, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_DELETE, StandardWatchEventKinds.ENTRY_MODIFY);
////                watchedPaths.add(dir);
//                return FileVisitResult.CONTINUE;
//            }
//            @Override
//            public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) {
//                System.out.println("f: " + path);
//                return FileVisitResult.CONTINUE;
//            }
//        });
//    }
}

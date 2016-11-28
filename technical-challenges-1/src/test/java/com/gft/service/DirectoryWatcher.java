package com.gft.util;

import com.gft.model.Node;
import com.sun.nio.file.SensitivityWatchEventModifier;
import com.sun.org.apache.xerces.internal.dom.NodeImpl;
import com.sun.org.apache.xerces.internal.util.SynchronizedSymbolTable;
import rx.Observable;
import rx.Scheduler;
import rx.Subscriber;
import rx.schedulers.Schedulers;

import java.io.File;
import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.*;

final class DirectoryWatcher {

    static Builder newBuilder() {
        return new Builder();
    }

    private static class FileSystemEventOnSubscribe implements Observable.OnSubscribe<Path> {
        private WatchService watcher;
        private Scheduler scheduler = Schedulers.newThread();
        private volatile boolean close = false;
        private Node rootNode;
        private Path path;
        private final Set<Path> watchedPaths = new HashSet<>();
        private  WatchEvent.Kind[] eventKind = new WatchEvent.Kind[]{
                StandardWatchEventKinds.ENTRY_CREATE,
                StandardWatchEventKinds.ENTRY_MODIFY,
                StandardWatchEventKinds.ENTRY_DELETE
        };

        FileSystemEventOnSubscribe(Path rootPath){
            try {
                this.path = rootPath;

                this.watcher = rootPath.getFileSystem().newWatchService();
                rootPath.register(this.watcher, eventKind, SensitivityWatchEventModifier.HIGH);
                watchedPaths.add(rootPath);

            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void call(Subscriber<? super Path> subscriber) {
            Scheduler.Worker worker = scheduler.createWorker();
            subscriber.add(worker);

            worker.schedule(() -> {
                do {
                    watchedPaths.forEach( path -> {
                        System.out.println("path: " + path.toAbsolutePath());
                    });

                    try {
                        WatchKey key = watcher.take();
                        if (key == null) {
                            continue;
                        }

                        watchedPaths.forEach(path2 -> {
                            getEventsForCurrentFiles(path2).forEach(event2 -> {
                                Path tmp = event2.context().toAbsolutePath();

                                if (!watchedPaths.contains(tmp)){

                                    try {
                                        tmp.register(this.watcher, eventKind, SensitivityWatchEventModifier.HIGH);
                                        watchedPaths.add(tmp);
                                    } catch (IOException e) {
                                        e.printStackTrace();
                                    }
                                } else {
                                    System.out.println(path2.toAbsolutePath() + " : " + tmp + " : " + !watchedPaths.contains(tmp) + " : " + watchedPaths.size() );
                                }
                            });
                        });

                        for (WatchEvent<?> event : key.pollEvents()) {
                            Path tmp = (Path)event.context();
                            subscriber.onNext(tmp);
                        }

                        if (!key.reset()) {
                            close();
                        }
                    } catch (Throwable t) {
                        subscriber.onError(t);
                    }
                } while (!close);
                subscriber.onCompleted();
            });
        }

        public void close() {
            this.close = true;
            try {
                watcher.close();
            } catch (Exception e) {
                e.printStackTrace();
            }
        }
    }

    private static List<WatchEvent<Path>> getEventsForCurrentFiles(Path directory) {
        final List<WatchEvent<Path>> events = new ArrayList<>();
        try {
            Files.walkFileTree(directory, new SimpleFileVisitor<Path>() {
                @Override
                public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) {
                    return FileVisitResult.CONTINUE;
                }

                @Override
                public FileVisitResult preVisitDirectory(Path path, BasicFileAttributes attrs) {
//                    System.out.println("d: " + path);
                    events.add(new WatchEvent<Path>() {
                        @Override
                        public Kind<Path> kind() {
                            return StandardWatchEventKinds.ENTRY_CREATE;
                        }

                        @Override
                        public int count() {
                            return 1;
                        }

                        @Override
                        public Path context() {
                            return path;
                        }
                    });
                    return FileVisitResult.CONTINUE;
                }
            });
        } catch (IOException e) {
            e.printStackTrace();
        }

        return events;
    }

    static class Builder {
        private Node rootNode;

        Builder addPath(Node node){
            rootNode = node;
            return this;
        }

        Observable<Path> build(){
            FileSystemEventOnSubscribe fileSystemEventOnSubscribe
                    = new FileSystemEventOnSubscribe((Path)rootNode.getPayload());

            Observable<Path> fileSystemEventObservable
                    = Observable.create(fileSystemEventOnSubscribe);

            fileSystemEventObservable
                    .doOnUnsubscribe(fileSystemEventOnSubscribe::close);

            return fileSystemEventObservable;
        }

    }

}

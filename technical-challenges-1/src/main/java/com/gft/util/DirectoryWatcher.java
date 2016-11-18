package com.gft.util;

import com.gft.model.Node;
import com.sun.nio.file.SensitivityWatchEventModifier;
import com.sun.org.apache.xerces.internal.dom.NodeImpl;
import com.sun.org.apache.xerces.internal.util.SynchronizedSymbolTable;
import rx.Observable;
import rx.Scheduler;
import rx.Subscriber;
import rx.schedulers.Schedulers;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.*;

final class DirectoryWatcher {


    static Builder newBuilder() {
        return new Builder();
    }

    private static class FileSystemEventOnSubscribe implements Observable.OnSubscribe<Node> {
        private WatchService watcher;
        private Scheduler scheduler;
        private volatile boolean close = false;
        private Node rootNode;
        private Path path;
        private final Set<Path> watchedPaths = new HashSet<>();
        private  WatchEvent.Kind[] eventKind = new WatchEvent.Kind[]{
                StandardWatchEventKinds.ENTRY_CREATE,
                StandardWatchEventKinds.ENTRY_MODIFY,
                StandardWatchEventKinds.ENTRY_DELETE
        };

        public FileSystemEventOnSubscribe(Node rootNode, Scheduler scheduler){
            try {
                this.rootNode = rootNode;
                this.scheduler = scheduler;
                path = ((Path) rootNode.getPayload());
                this.watcher = path.getFileSystem().newWatchService();

                path.register(this.watcher,eventKind, SensitivityWatchEventModifier.HIGH);
                watchedPaths.add(path);

            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        @Override
        public void call(Subscriber<? super Node> subscriber) {
//            WatchEvent.Kind kind = event.kind();
//            if (StandardWatchEventKinds.OVERFLOW != kind) {
//                this.path = (Path) event.context();
//            }
//            System.out.println((Path)rootNode.getPayload());
//            getEventsForCurrentFiles((Path)rootNode.getPayload()).forEach(event -> {
//                WatchEvent.Kind kind = event.kind();
//                System.out.printf("kind: %s %s \n", event.context(), event.kind() );
//                subscriber.onNext(rootNode);
//            });
            watchedPaths.forEach(path -> {
                getEventsForCurrentFiles((Path)rootNode.getPayload()).forEach(event -> {
                    WatchEvent.Kind kind = event.kind();
                    System.out.printf("kind: %s %s %s \n",path, event.context(), event.kind() );

//                    Node tmp = new NodeImpl();
//                    subscriber.onNext();
                });
            });


            Scheduler.Worker worker = scheduler.createWorker();
            subscriber.add(worker);

            worker.schedule(() -> {
                do {
                    try {
                        WatchKey key = watcher.take();
                        if (key == null) {
                            continue;
                        }

                        for (WatchEvent<?> event : key.pollEvents()) {
//                            System.out.println(event.kind() + " : " + event.context().toString() );

                            Path tmp = (Path)event.context();

                            System.out.printf("kind: %s -> %s \n", event.context(), event.kind() );
                            subscriber.onNext(rootNode);
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

        private List<WatchEvent<Path>> getEventsForCurrentFiles(Path directory) {
            final List<WatchEvent<Path>> events = new ArrayList<>();
            try {
                Files.walkFileTree(directory, EnumSet.of(FileVisitOption.FOLLOW_LINKS), Integer.MAX_VALUE,
                        new SimpleFileVisitor<Path>() {
                            @Override
                            public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) throws IOException  {
//                                Path target = targetDir.resolve(sourceDir.relativize(dir));
                                System.out.println("preVisitDirectory: " + path );
                                return FileVisitResult.CONTINUE;
                            }
                            @Override
                            public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
                                System.out.println("visitFile: " + path );
                                return FileVisitResult.CONTINUE;
                            }
                        });
//                Files.walkFileTree(directory, new SimpleFileVisitor<Path>() {
//                    @Override
//                    public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) {
//                        System.out.println("visitFile: " + path);
//                        events.add(pathToWatchEvent(path));
//                        return FileVisitResult.CONTINUE;
//                    }
//
//                    @Override
//                    public FileVisitResult preVisitDirectory(Path path, BasicFileAttributes attrs) {
//                        System.out.println("preVisitDirectory: " + path );
//                        System.out.println("attrs: " + attrs.isDirectory() );
//
//                        if (attrs.isSymbolicLink()) {
//                            System.out.format("Symbolic link: %s ", path);
//                        } else if (attrs.isRegularFile()) {
//                            System.out.format("Regular file: %s ", path);
//                        } else {
//                            System.out.format("Other: %s ", path);
//                        }
//
//
//                            events.add(pathToWatchEvent(path));
//                        return FileVisitResult.CONTINUE;
//                    }
//
//                });
            } catch (IOException e) {
                e.printStackTrace();
            }

            return events;
        }

        private WatchEvent<Path> pathToWatchEvent(Path path) {
            return new WatchEvent<Path>() {
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
            };
        }
    }


    static class Builder {

        private Node rootNode;

        private Scheduler scheduler = Schedulers.newThread();

        Builder() {}

        Builder addPath(Node node){
            rootNode = node;

            return this;
        }

        Observable<Node> build(){
            FileSystemEventOnSubscribe fileSystemEventOnSubscribe
                    = new FileSystemEventOnSubscribe(rootNode, scheduler);

            Observable<Node> fileSystemEventObservable
                    = Observable.create(fileSystemEventOnSubscribe);

            fileSystemEventObservable
                    .doOnUnsubscribe(fileSystemEventOnSubscribe::close);

            return fileSystemEventObservable;
        }

    }

}

package com.gft.util;

import com.gft.model.Node;
import com.sun.org.apache.xerces.internal.util.SynchronizedSymbolTable;
import rx.Observable;
import rx.Scheduler;
import rx.Subscriber;
import rx.schedulers.Schedulers;

import java.io.IOException;
import java.nio.file.*;
import java.nio.file.attribute.BasicFileAttributes;
import java.util.ArrayList;
import java.util.List;

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
        private  WatchEvent.Kind[] eventKind = new WatchEvent.Kind[]{
                StandardWatchEventKinds.ENTRY_CREATE,
                StandardWatchEventKinds.ENTRY_MODIFY,
                StandardWatchEventKinds.ENTRY_DELETE
        };

        public FileSystemEventOnSubscribe(Node rootNode, Scheduler scheduler){
            try {
                this.rootNode = rootNode;
                this.scheduler = scheduler;
                //this.watcher = FileSystems.getDefault().newWatchService();
                path = ((Path) rootNode.getPayload());
                this.watcher = path.getFileSystem().newWatchService();

                path.register(this.watcher,eventKind);
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
            getEventsForCurrentFiles((Path)rootNode.getPayload()).forEach(event -> {
                WatchEvent.Kind kind = event.kind();
                subscriber.onNext(rootNode);
            });


            Scheduler.Worker worker = scheduler.createWorker();
            subscriber.add(worker);

            worker.schedule(() -> {

                do {

                    try {

                        WatchKey key = watcher.take();
                        System.out.println("close: " + close);
                        System.out.println("key: " + key);
                        if (key == null) {
                            continue;
                        }
//
                        for (WatchEvent<?> event : key.pollEvents()) {
//                            FileSystemEvent fileSystemEvent = new FileSystemEvent(event);
//                            System.out.println(event.kind());

                            subscriber.onNext(rootNode);
                        }
//
                        if (!key.reset()) {
                            close();
                        }
                    } catch (Throwable t) {
                        t.printStackTrace();
//                        subscriber.onError(t);
                    }
                } while (!close);
                subscriber.onCompleted();
            });
        }

        public void close() {
            this.close = true;

            try {
                watcher.close();
            } catch (Exception e) {}
        }

        private List<WatchEvent<Path>> getEventsForCurrentFiles(Path directory) {
            final List<WatchEvent<Path>> events = new ArrayList<>();
            try {
                Files.walkFileTree(directory, new SimpleFileVisitor<Path>() {
                    @Override
                    public FileVisitResult visitFile(Path path, BasicFileAttributes attrs) {
                        events.add(pathToWatchEvent(path));
                        return FileVisitResult.CONTINUE;
                    }

                    @Override
                    public FileVisitResult preVisitDirectory(Path path, BasicFileAttributes attrs) {
                        events.add(pathToWatchEvent(path));
                        return FileVisitResult.CONTINUE;
                    }
                });
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

//            Observable<Node> fileSystemEventObservable
//                    = NodeConverter.convert(new TreeConverter(rootNode));

            Observable<Node> fileSystemEventObservable
                    = Observable.create(fileSystemEventOnSubscribe);


            fileSystemEventObservable
                    .doOnUnsubscribe(fileSystemEventOnSubscribe::close);

            return fileSystemEventObservable;
        }

    }

}

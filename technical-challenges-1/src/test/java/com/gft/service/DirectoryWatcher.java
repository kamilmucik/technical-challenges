package com.gft.service;

import com.gft.model.CustomSubscriber;
import rx.Observable;
import rx.Subscriber;
import rx.functions.Action1;
import rx.functions.Func0;
import rx.functions.Func1;

import java.nio.file.*;
import java.util.Vector;
import java.util.concurrent.atomic.AtomicInteger;

/**
 * 1. When the first subscriber is connected, watcher is started and returned structure of Path
 * 2. After register subscriber, observer has to send all paths in stream
 */
public final class DirectoryWatcher {

    /**
     * List of subscribers and Path, what they want to watch
     */
    static AtomicInteger atomicInteger = new AtomicInteger();
    private static final Vector<CustomSubscriber> knownSubscribers = new Vector<>();
    private static Thread watcherThread = new Thread(() ->producePathsFromFileSystem());



    // FIXME: 2016-12-06 Add list of subscribers and notify them when something is happend
    // FIXME: 2016-12-06 Propose strategy of close
    /**
     * Method return new created paths, and add subscribes to subscribersList
     * @param /root path
     * @return Observable <Path> stream
     */
//    public static Observable<Path> changed(Path root) throws IOException {
//        // FIXME: 2016-12-06 need to by closed
//        WatchService watcher = root.getFileSystem().newWatchService();
//        root.register(watcher, StandardWatchEventKinds.ENTRY_CREATE, StandardWatchEventKinds.ENTRY_MODIFY);
//
//        if (subscriberList.isEmpty()){
//
//        }
//
//atomicInteger
//        return null;
//    }

    private static void producePathsFromFileSystem(){
        while (!watcherThread.isInterrupted() || Thread.currentThread().isInterrupted()) {
            System.out.println("tick: " + knownSubscribers.size() + " : " + Thread.currentThread().isInterrupted());
            try {
                Thread.sleep(500);
            } catch (InterruptedException e) {
//                e.printStackTrace();
            }
        }
    }

    public static Observable<String> register(Path path){

        Func0<CustomSubscriber> resourceFactory = () -> {
            CustomSubscriber client = new CustomSubscriber(atomicInteger.incrementAndGet(),path);
            System.out.println(Thread.currentThread().getName() + " : " + client + " : Created and started the client.");
            return client;
        };
        Func1<CustomSubscriber, Observable<String>> observableFactory = (client) -> {
            System.out.println(Thread.currentThread().getName() + " : " + client + " : About to create Observable.");
            /**
             * 1. Jeśli nic nie ma w liście subskrybentów to utwórz wątek obserwujący
             *
             */


            return Observable.create(s -> {
                Thread thread = new Thread(() -> emittedElements(s, client));
                client.setOwnThread(thread);

                if (knownSubscribers.size() == 0 ){
                    System.out.println("start watcher");
                    watcherThread.start();
                }
                thread.start();
                knownSubscribers.add(client);
            });
        };
        Action1<CustomSubscriber> disposeAction = (client) -> {
            knownSubscribers.remove(client);
            if (knownSubscribers.size() == 0 ){
                System.out.println("stop watcher");
                watcherThread.interrupt();
//                watcherThread.stop();
            }
            System.out.println(Thread.currentThread().getName() + " : " + client + " : Closing the client.");
        };

        return Observable.using(
                resourceFactory,
                observableFactory,
                disposeAction);
    }

    /**
     * Method emitted elements to subscribers
     * @param s
     * @param client
     */
    static void emittedElements(final Subscriber s, final CustomSubscriber client) {
        int i = 0;
        while(!client.getOwnThread().isInterrupted() && !s.isUnsubscribed()){
            if (s.isUnsubscribed()) break;
            s.onNext(">> " + i + " : " + client + " : " + Thread.currentThread().getName());
            try {
                Thread.sleep(100);
            } catch (InterruptedException e) {
            }
            i++;
        }
        s.onCompleted();
    }


    public static Observable<String> changed(Path path) {
        return Observable.create(new Observable.OnSubscribe<String>() {
            @Override
            public void call(Subscriber<? super String> subscriber) {
                for (int i = 0; i < 17; i++) {
                    if (subscriber.isUnsubscribed()) return;
                    try {
                        Thread.sleep(200);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                    subscriber.onNext(">> " + i);
                }
                if (subscriber.isUnsubscribed()) return;

                subscriber.onCompleted();
            }
        });
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

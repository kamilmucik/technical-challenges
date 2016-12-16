package com.gft.service;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import com.gft.util.TreeConverter;
import rx.Observable;
import rx.Subscriber;
import rx.Subscription;
import rx.functions.Action1;
import rx.functions.Func0;
import rx.functions.Func1;
import rx.schedulers.Schedulers;

import java.io.IOException;
import java.nio.file.*;
import java.util.Date;
import java.util.Iterator;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.atomic.AtomicLong;
import com.gft.util.TreeConverter;

import static java.nio.file.StandardWatchEventKinds.ENTRY_CREATE;
import static java.nio.file.StandardWatchEventKinds.ENTRY_DELETE;
import static java.nio.file.StandardWatchEventKinds.ENTRY_MODIFY;

public final class DirectoryWatcher {

    /**
     * Map has object of path, that observer will watch and CompletableFuture object, that will be call when
     * some event happened.
     */
    private Map<Path,Subscriber> registredSubscribers = new ConcurrentHashMap<>();
    private volatile boolean shouldCloseWatcher = false;
    private static AtomicLong lastTick = new AtomicLong(0L);
    private static Subscription subscription;
    private static WatchService watcher = null;//FileSystems.getDefault().newWatchService();

    public Observable<String> register(Path path) {
        return Observable.create(new Observable.OnSubscribe<String>() {
            @Override
            public void call(Subscriber<? super String> subscriber) {
                for (int i = 0; i < 97; i++) {
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

    public Observable<String> register2(Path path) {
        Func0<String> resourceFactory = () -> {
            if (watcher == null)
                try {
                    watcher = path.getFileSystem().newWatchService();
                    path.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
                } catch (IOException e) {
                    e.printStackTrace();
                }
            System.out.println(Thread.currentThread().getName() + ": Created and started the client.");
            return "";
        };
        Func1<String, Observable<String>> observableFactory = (client) -> {
            System.out.println(Thread.currentThread().getName() + " : " + client + " : About to create Observable.");
            return Observable.create((Observable.OnSubscribe<String>) subscriber -> {
                if (registredSubscribers.size() == 0 ){
                    resumeFileWatcher();
                }
                registredSubscribers.put(path,subscriber);
            });
        };
        Action1<String> disposeAction = (client) -> {
            registredSubscribers.remove(client);
            if (registredSubscribers.size() == 0 ){
                System.out.println("stop watcher");
                shouldCloseWatcher = true;
                try {
                    watcher.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
            System.out.println(Thread.currentThread().getName() + " : " + client + " : Closing the client.");
        };

        return Observable.using(
                resourceFactory,
                observableFactory,
                disposeAction);
    }

    /**
     * Register CustomSubscriber subscriber object.
     *
     * @param subscriber
     * @throws  IllegalStateException
     *          In the case of the set Path object is not directory.
     */
//    public static void registSubscriber(Path dir, Subscriber subscriber){
//        if (!Files.isDirectory(dir))
//            throw new IllegalStateException("Can register only directory.");
//
//        if (watcher == null) {
//            try {
//                watcher = dir.getFileSystem().newWatchService();
//                dir.register(watcher, ENTRY_CREATE, ENTRY_DELETE, ENTRY_MODIFY);
//                registDirectory(dir);
//            } catch (IOException e) {
//                e.printStackTrace();
//                return;
//            }
//        }
//
//        Observable.using(
//                () -> subscriber,
//                (sub) -> Observable.create(s -> {
//                    if (registredSubscribers.size() == 0 ){
//                        resumeFileWatcher();
//                    }
//                    registredSubscribers.put(dir,sub);
//                    new Thread(() -> emitKnownElements(subscriber)).start();
//                }),
//                (sub) -> {
//                    registredSubscribers.remove(sub);
//                    if (registredSubscribers.size() == 0 ){
//                        stopFileWatcher();
//                    }
//                });
//    }

    /**
     * Start or resume file watcher
     */
    public void resumeFileWatcher() {
        subscription = Observable.interval(200, TimeUnit.MILLISECONDS, Schedulers.io())
            .map(tick -> lastTick.getAndIncrement())
            .subscribe(tick -> {
                try {
                    WatchKey key = watcher.take();
                    if (key == null) {

                        throw new IOException("Watcher returned WatchKey that is null");
                    }
                    for (WatchEvent<?> event : key.pollEvents()) {
                        Path tmp = (Path)event.context();
                        System.out.println(tick + " :: " + tmp + " :: " + tmp);
                    }
                    if (!key.reset()) {
                        shouldCloseWatcher = true;
                    }
                } catch (Throwable t) {
                    t.printStackTrace();
                }

            });
    }




}

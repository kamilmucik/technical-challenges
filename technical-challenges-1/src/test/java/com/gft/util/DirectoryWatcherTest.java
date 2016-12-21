package com.gft.util;

import com.gft.service.DirectoryWatcher;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.junit.Test;
import rx.Observable;
import rx.Subscriber;
import rx.observers.TestSubscriber;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


public class DirectoryWatcherTest {

//    @Test(timeout = 120_000)
//    public void shouldReturnEmitedElementFromDifferenPath() throws InterruptedException, IOException {
//        DirectoryWatcher watcher = new DirectoryWatcher();
//        Observable<String> observable1 = watcher.register(Paths.get("C:\\temp"));
//        Observable<String> observable2 = watcher.register(Paths.get("C:\\temp\\sub2"));
//        Subscriber<String> subscriber1 = new Subscriber<String>() {
//            @Override
//            public void onCompleted() { System.out.println("onCompleted");}
//            @Override
//            public void onError(Throwable throwable) {}
//            @Override
//            public void onNext(String path) {
//                System.out.println("1.onNext: " + path);
//            }
//        };
//        observable1.subscribe(subscriber1);
//
//        Thread.sleep(10_000);
//        Subscriber<String> subscriber2 = new Subscriber<String>() {
//            @Override
//            public void onCompleted() { System.out.println("onCompleted");}
//            @Override
//            public void onError(Throwable throwable) {}
//            @Override
//            public void onNext(String path) {
//                System.out.println("2.onNext: " + path);
//            }
//        };
//        observable2.subscribe(subscriber2);
//
//        Thread.sleep(15000);
//        subscriber1.unsubscribe();
//        Thread.sleep(45000);
//        subscriber2.unsubscribe();
//    }

    @Test
    public void  shouldReturnEmitedElementFronObserver() throws InterruptedException, IOException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
        Path home = fs.getPath("/data");
        Path pathTwo = home.resolve("testFolder");
        Files.createDirectory(pathTwo);
        Path pathThree = home.resolve("testFolder/test2.txt");
        Files.write(pathThree, ImmutableList.of("1"), StandardCharsets.UTF_8);


        DirectoryWatcher watcher = new DirectoryWatcher();
        Observable<Path> observable = watcher.register(home);
        Subscriber<Path> subscriber = new Subscriber<Path>() {
            @Override
            public void onCompleted() { System.out.println("onCompleted");}
            @Override
            public void onError(Throwable throwable) {}
            @Override
            public void onNext(Path path) {
                System.out.println("1.onNext: " + path.toString());
            }
        };
        observable.subscribe(subscriber);

        Path pathOne = home.resolve("test.txt");
        Files.write(pathOne, ImmutableList.of("1"), StandardCharsets.UTF_8);


        Thread.sleep(15000);
        subscriber.unsubscribe();
    }

    @Test
    public void  shouldReturnEmitedElementFronObserver2() throws InterruptedException, IOException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
        Path home = fs.getPath("/data");
        Path pathTwo = home.resolve("testFolder");
        Files.createDirectory(pathTwo);
        Path pathThree = home.resolve("testFolder/test2.txt");
        Files.write(pathThree, ImmutableList.of("1"), StandardCharsets.UTF_8);


        DirectoryWatcher watcher = new DirectoryWatcher();
        Observable<Path> observable = watcher.register2(Paths.get("C:\\temp"));
        Subscriber<Path> subscriber = new Subscriber<Path>() {
            @Override
            public void onCompleted() { System.out.println("onCompleted");}
            @Override
            public void onError(Throwable throwable) {}
            @Override
            public void onNext(Path path) {
                System.out.println("1.onNext: " + path.toString());
            }
        };
        observable.subscribe(subscriber);

        Path pathOne = home.resolve("test.txt");
        Files.write(pathOne, ImmutableList.of("1"), StandardCharsets.UTF_8);

        Observable<Path> observable2 = watcher.register2(Paths.get("C:\\temp\\sub"));
        Subscriber<Path> subscriber2 = new Subscriber<Path>() {
            @Override
            public void onCompleted() { System.out.println("onCompleted");}
            @Override
            public void onError(Throwable throwable) {}
            @Override
            public void onNext(Path path) {
                System.out.println("2.onNext: " + path.toString());
            }
        };
        observable2.subscribe(subscriber2);
        Thread.sleep(30000);
        subscriber2.unsubscribe();

        Thread.sleep(55000);
        subscriber.unsubscribe();
    }
}

package com.gft.util;

import com.gft.service.DirectoryWatcher;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.junit.Test;
import rx.Observable;
import rx.Subscriber;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;


public class DirectoryWatcherTest {

//    @Test(timeout = 120000)
//    public void shouldReturnEmitedElementFronCompletable() throws InterruptedException, IOException {
//        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
//        Path home = fs.getPath("/data");
//        Subscriber<String> subscriber1 = new Subscriber<String>() {
//            @Override
//            public void onCompleted() {}
//            @Override
//            public void onError(Throwable throwable) {}
//            @Override
//            public void onNext(String path) {
//                System.out.println("1.onNext: " + path);
//            }
//        };
//        Subscriber<String> subscriber2 = new Subscriber<String>() {
//            @Override
//            public void onCompleted() {}
//            @Override
//            public void onError(Throwable throwable) {}
//            @Override
//            public void onNext(String path) {
//                System.out.println("2.onNext: " + path);
//            }
//        };
//
//
//        Path pathOne = home.resolve("test.txt");
//        Files.write(pathOne, ImmutableList.of("1"), StandardCharsets.UTF_8);
//        Path pathTwo = home.resolve("testFolder");
//        Files.createDirectory(pathTwo);
////        DirectoryWatcher.registSubscriber(pathTwo,subscriber2);
//        Path pathThree = pathTwo.resolve("test2.txt");
//        Files.write(pathThree, ImmutableList.of("2"), StandardCharsets.UTF_8);
//
//        DirectoryWatcher.registSubscriber(Paths.get("C:\\temp"),subscriber1);
//        Thread.sleep(5000);
//        DirectoryWatcher.registSubscriber(Paths.get("C:\\temp\\sub2"),subscriber2);
//
//        Thread.sleep(5000);
//        subscriber1.unsubscribe();
//        Thread.sleep(45000);
//        subscriber2.unsubscribe();
//    }

    @Test
    public void  shouldReturnEmitedElementFronObserver() throws InterruptedException {
        DirectoryWatcher watcher = new DirectoryWatcher();

        Observable<String> observable = watcher.register2(Paths.get("C:\\temp"));

        Subscriber<String> subscriber = new Subscriber<String>() {
            @Override
            public void onCompleted() { System.out.println("onCompleted");}
            @Override
            public void onError(Throwable throwable) {}
            @Override
            public void onNext(String path) {
                System.out.println("1.onNext: " + path);
            }
        };
        observable.subscribe(subscriber);

        Thread.sleep(30000);
        subscriber.unsubscribe();
        System.out.println(".");
    }
}

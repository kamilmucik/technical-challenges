package com.gft.util;

import com.gft.service.DirectoryWatcher;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.junit.Test;
import rx.Observable;
import rx.Subscriber;
import rx.Subscription;

import java.io.IOException;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.assertj.core.api.Assertions.assertThat;

public class DirectoryWatcherTest {

//    @Test(timeout =  5_000)
//    public void shoudNotyfiAboutNewFile() throws IOException, InterruptedException {
//        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
//        Path home = fs.getPath("/data");
//        CountDownLatch latch = new CountDownLatch(1);
//
//        Observable<Path> fileSystemWatcher = DirectoryWatcher.changed(home);
//
//        Path onePath = home.resolve("test.txt");
//        Files.write(onePath, ImmutableList.of("1"), StandardCharsets.UTF_8);
//        TestSubscriber<Path> subscriber = new TestSubscriber<>();
//        fileSystemWatcher.doOnNext( next -> latch.countDown()).subscribe(subscriber);
//        latch.await();
//
//        subscriber.assertNoErrors();
//        subscriber.assertValue(onePath);
//
//        subscriber.unsubscribe();
//    }

//    @Test(timeout =  5_000)
//    public void shoudNotyfiAboutNewDirectory() throws IOException, InterruptedException {
//        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
//        Path home = fs.getPath("/data");
//
//        Observable<Path> fileSystemWatcher = DirectoryWatcher.changed(home);
//
//        ReplaySubject<Path> subject = ReplaySubject.create();
//        fileSystemWatcher.subscribe(subject);
//
//        Path pathOne = home.resolve("test.txt");
//        Files.write(pathOne, ImmutableList.of("1"), StandardCharsets.UTF_8);
//        Path pathTwo = home.resolve("testFolder");
//        Files.createDirectory(pathTwo);
//        Path pathThree = pathTwo.resolve("test2.txt");
//        Files.write(pathThree, ImmutableList.of("2"), StandardCharsets.UTF_8);
//
//        Iterator<Path> it = subject.toBlocking().toIterable().iterator();
//
//        assertThat(it).contains(pathOne, pathTwo, pathThree);
//    }

    @Test
    public void shouldRegisterManySubscribersAndReturnSameResult() throws InterruptedException, IOException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
        Path home = fs.getPath("/data");
        Path pathTwo = home.resolve("testFolder");
        Files.createDirectory(pathTwo);

        Observable<String> fileSystemWatcher = DirectoryWatcher.register(home);
        Observable<String> fileSystemWatcher2 = DirectoryWatcher.register(pathTwo);
        Subscription subscription1 = fileSystemWatcher.subscribe(new Subscriber<String>() {
            @Override
            public void onCompleted() {
                System.out.println("s1.onCompleted: ");
            }

            @Override
            public void onError(Throwable throwable) {
                System.out.println("s1.onError: " + throwable);
            }

            @Override
            public void onNext(String s) {
                System.out.println("s1.onNext: " + s);
            }
        });


//
        Subscription subscription2 = fileSystemWatcher2.subscribe(new Subscriber<String>() {
            @Override
            public void onCompleted() {
                System.out.println("s2.onCompleted: ");
            }

            @Override
            public void onError(Throwable throwable) {
                System.out.println("s2.onError: " + throwable);
            }

            @Override
            public void onNext(String s) {
                System.out.println("s2.onNext: " + s);
            }
        });




        Thread.sleep(2000);

        Thread.sleep(5000);
        subscription2.unsubscribe();
        subscription1.unsubscribe();
        Thread.sleep(5000);
        System.out.println("koniec");

    }
}

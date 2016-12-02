package com.gft.util;

import com.gft.service.DirectoryWatcher;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.junit.Test;
import rx.Observable;
import rx.observers.TestSubscriber;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.CountDownLatch;

public class DirectoryWatcherTest {

    @Test(timeout =  15_000)
    public void shoudNotyfiAboutNewFile() throws IOException, InterruptedException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
        Path home = fs.getPath("/data");
        CountDownLatch latch = new CountDownLatch(1);

        Observable<Path> fileSystemWatcher = DirectoryWatcher.changed(home);

        Path onePath = home.resolve("test.txt");
        Files.write(onePath, ImmutableList.of("1"), StandardCharsets.UTF_8);
        TestSubscriber<Path> subscriber = new TestSubscriber<>();
        fileSystemWatcher.doOnNext( next -> latch.countDown()).subscribe(subscriber);
        latch.await();

        subscriber.assertNoErrors();
        subscriber.assertValue(onePath);

        subscriber.unsubscribe();
    }

    @Test(timeout =  35_000)
    public void shoudNotyfiAboutNewDirectory() throws IOException, InterruptedException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
        Path home = fs.getPath("/data");
        CountDownLatch latch = new CountDownLatch(3);

        Observable<Path> fileSystemWatcher = DirectoryWatcher.changed(home);

        TestSubscriber<Path> subscriber = new TestSubscriber<>();
        fileSystemWatcher.doOnNext( next -> {
            latch.countDown();
            System.out.println(next);
        }).subscribe(subscriber);
        latch.await();
        Path onePath = home.resolve("test.txt");
        Files.write(onePath, ImmutableList.of("1"), StandardCharsets.UTF_8);
        onePath = home.resolve("testFolder");
        Files.createDirectory(onePath);
        onePath = onePath.resolve("test2.txt");
        Files.write(onePath, ImmutableList.of("2"), StandardCharsets.UTF_8);

        subscriber.assertNoErrors();
        subscriber.assertValue(onePath);

        subscriber.unsubscribe();
    }

}

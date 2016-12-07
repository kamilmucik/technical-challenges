package com.gft.util;

import com.gft.service.DirectoryWatcher;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.junit.Test;
import rx.Observable;
import rx.observers.TestSubscriber;
import rx.subjects.ReplaySubject;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.Iterator;
import java.util.concurrent.CountDownLatch;

import static org.assertj.core.api.Assertions.assertThat;

public class DirectoryWatcherTest {

    @Test(timeout =  5_000)
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

    @Test(timeout =  5_000)
    public void shoudNotyfiAboutNewDirectory() throws IOException, InterruptedException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix().toBuilder().setWorkingDirectory("/data").build());
        Path home = fs.getPath("/data");

        Observable<Path> fileSystemWatcher = DirectoryWatcher.changed(home);

        ReplaySubject<Path> subject = ReplaySubject.create();
        fileSystemWatcher.subscribe(subject);

        Path pathOne = home.resolve("test.txt");
        Files.write(pathOne, ImmutableList.of("1"), StandardCharsets.UTF_8);
        Path pathTwo = home.resolve("testFolder");
        Files.createDirectory(pathTwo);
        Path pathThree = pathTwo.resolve("test2.txt");
        Files.write(pathThree, ImmutableList.of("2"), StandardCharsets.UTF_8);

        Iterator<Path> it = subject.toBlocking().toIterable().iterator();

        assertThat(it).contains(pathOne, pathTwo, pathThree);
    }

}

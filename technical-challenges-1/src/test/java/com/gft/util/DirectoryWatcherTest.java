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

        Thread.sleep(5000);
        subscriber.unsubscribe();
    }
}

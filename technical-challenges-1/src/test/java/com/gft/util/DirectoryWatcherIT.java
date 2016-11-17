package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.junit.Test;
import rx.Observable;
import rx.Subscription;
import rx.observers.TestSubscriber;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.concurrent.CountDownLatch;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class DirectoryWatcherIT {


    @Test(timeout = 15_000)
    public void shouldReturnChangesInPath() throws IOException, InterruptedException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix());
        Path home = fs.getPath("/data");
        Files.createDirectory(home);
        Node<Path> rootNode = new NodeImpl<>(home);
        CountDownLatch latch = new CountDownLatch(1);
        Observable<Node> fileSystemWatcher =
                DirectoryWatcher
                        .newBuilder()
                        .addPath(rootNode)
                        .build();

        TestSubscriber subscriber = new TestSubscriber();
        Subscription subscribe = fileSystemWatcher
                .doOnNext(a -> {
                    System.out.println("Got an event for " + a.getPayload());
                })
                .subscribe(subscriber);

        fileSystemWatcher.subscribe(System.out::println);


        Path onePath = home.resolve("test.txt");
        Files.write(onePath, ImmutableList.of("1"), StandardCharsets.UTF_8);

        Thread.sleep(3000);

//        latch.await();

        subscribe.unsubscribe();

        assertThat(subscribe.isUnsubscribed()).isTrue();

    }
}

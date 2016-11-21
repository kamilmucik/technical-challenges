package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import com.gft.service.FileService;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.junit.Test;
import rx.Observable;
import rx.Subscription;
import rx.observers.TestSubscriber;
import rx.subjects.ReplaySubject;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.concurrent.CountDownLatch;
import java.util.stream.Stream;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;

public class DirectoryWatcherIT {

    @Test
    public void shouldReturnFilesStructureAsNode() throws IOException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix());
        Path root = fs.getPath("/root");
        Files.createDirectory(root);
        Path onePath = root.resolve("test.txt");
        Files.write(onePath, ImmutableList.of("1"), StandardCharsets.UTF_8);
        onePath = root.resolve("testFolder");
        Files.createDirectory(onePath);
        onePath = onePath.resolve("test2.txt");
        Files.write(onePath, ImmutableList.of("2"), StandardCharsets.UTF_8);
        onePath = root.resolve("testFolder2");
        Files.createDirectory(onePath);
        Node<Path> rootNode = FileService.getNodeImplChildren(root);
        ReplaySubject<Path> subject = ReplaySubject.create();
        subject.onNext(onePath);

        Observable observable = NodeConverter.convert(new TreeConverter(rootNode));

        assertThat(observable.toBlocking().last()).isEqualTo(subject.toBlocking().first());
    }

    @Test(timeout = 15_000)
    public void shouldReturnChangesInPath() throws IOException, InterruptedException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix());
        Path home = fs.getPath("/data");
        Files.createDirectory(home);
        Path onePath = home.resolve("test.txt");
        Files.write(onePath, ImmutableList.of("1"), StandardCharsets.UTF_8);
        onePath = home.resolve("testFolder");
        Files.createDirectory(onePath);
        onePath = onePath.resolve("test2.txt");
        Files.write(onePath, ImmutableList.of("2"), StandardCharsets.UTF_8);
        onePath = home.resolve("testFolder2");
        Files.createDirectory(onePath);

        Node<Path> rootNode = FileService.getNodeImplChildren(home);
//        CountDownLatch latch = new CountDownLatch(2);
//        Observable<Node> fileSystemWatcher =
//                DirectoryWatcher
//                        .newBuilder()
//                        .addPath(rootNode)
//                        .build();
//
//        TestSubscriber subscriber = new TestSubscriber();
//        Subscription subscribe = fileSystemWatcher
//                .doOnNext(a -> {
//                    System.out.println(">> " + a.getPayload());
//                    latch.countDown();
//                })
//                .subscribe(subscriber);


//        Thread.sleep(3000);



//        rootNode.getChildren().addAll(FileService.getNodeImplChildren(rootNode));
//        Observable observable = NodeConverter.convert(new TreeConverter(rootNode));
//        observable.subscribe(System.out::println);


//        latch.await();

//        subscribe.unsubscribe();
//        assertThat(subscribe.isUnsubscribed()).isTrue();

    }
}

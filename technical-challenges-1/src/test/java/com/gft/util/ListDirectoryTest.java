package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import com.google.common.jimfs.SystemJimfsFileSystemProvider;
import com.sun.org.apache.xerces.internal.util.SynchronizedSymbolTable;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import rx.Observable;
import rx.observers.TestSubscriber;

import java.io.File;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;


public class ListDirectoryTest {

    @Rule
    public TemporaryFolder folder= new TemporaryFolder();

//    @Test
//    public void shouldReturnFilesStructureAsNodeByTemporaryFolder() throws IOException {
//        File createdFile= folder.newFile("myfile.txt");
//
//        Node<File> rootNode = new NodeImpl<>(folder.getRoot());
//        rootNode.getChildren().addAll(getNodeImplChildren(rootNode));
//
//        Observable<File> observable = FileService.convert(new TreeConverter(rootNode));
////        TestSubscriber<File> subscriber = new TestSubscriber<>();
//
//        observable.subscribe(System.out::println);
////        File resultFile = subscriber.getOnNextEvents().get(0);
////
////        subscriber.assertNoErrors();
////        assertThat(resultFile).isEqualTo(createdFile);
//    }
    @Test
    public void shouldReturnFilesStructureAsNode() throws IOException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix());
        Path home = fs.getPath("/data");
        Files.createDirectory(home);
        Path hello = home.resolve("test.txt");
        Files.write(hello, ImmutableList.of("1"), StandardCharsets.UTF_8);
        Path csv = home.resolve("data.csv");
        Files.write(csv, ImmutableList.of("2"), StandardCharsets.UTF_8);
        Path subdir1 = fs.getPath("/data/dir1");
        Files.createDirectory(subdir1);
        Path hello2 = subdir1.resolve("test2.txt");
        Files.write(hello2, ImmutableList.of("3"), StandardCharsets.UTF_8);
//        Path home = Paths.get("C:\\temp");

        Node<Path> rootNode = new NodeImpl<>(home);
        rootNode.getChildren().addAll(getNodeImplChildren(rootNode));
        Observable<Path> observable = FileService.convert(new TreeConverter(rootNode));
        observable.subscribe(System.out::println,System.out::println,System.out::println);

    }

    private static List<Node<Path>> getNodeImplChildren(Node<Path> parentNode) {
        List<Node<Path>> children = new LinkedList<>();
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(parentNode.getPayload())) {
            for (Path entry : stream) {
                children.add(new NodeImpl<>(entry));
                if (Files.isDirectory(entry)) {
                    children.addAll(getNodeImplChildren(new NodeImpl<>(entry)));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return children;
    }

}

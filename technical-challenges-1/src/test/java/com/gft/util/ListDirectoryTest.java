package com.gft.util;

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

import static org.assertj.core.api.Assertions.assertThat;


public class ListDirectoryTest {

    @Rule
    public TemporaryFolder folder= new TemporaryFolder();

    @Test
    public void shouldReturnFilesStructureAsNodeByTemporaryFolder() throws IOException {
        File createdFile= folder.newFile("myfile.txt");
        Observable<File> observable = FileService.convert(folder.getRoot());
        TestSubscriber<File> subscriber = new TestSubscriber<>();

        observable.subscribe(subscriber);
        File resultFile = subscriber.getOnNextEvents().get(0);

        subscriber.assertNoErrors();
        assertThat(resultFile).isEqualTo(createdFile);
    }
    @Test
    public void shouldReturnFilesStructureAsNode() throws IOException {
        FileSystem fileSystem = Jimfs.newFileSystem(Configuration.unix());
        Path home = fileSystem.getPath("/resources");
        Files.createDirectory(home);
        Path hello = home.resolve("hello.txt"); //
        Files.write(hello, ImmutableList.of("hello world"), StandardCharsets.UTF_8);

        Path linkToHello = home.resolve("test.txt.link");
        Files.createSymbolicLink(linkToHello, hello);

        Files.list(home).forEach(file -> {
            try {
                System.out.println(String.format("%s (%db)", file, Files.readAllBytes(file).length));
            } catch (Exception e) {
                e.printStackTrace();
            }
        });
        Observable<File> observable = FileService.convert(home);
//        TestSubscriber<File> subscriber = new TestSubscriber<>();

        observable.subscribe(System.out::println);

//        observable.subscribe(subscriber);
//        File resultFile = subscriber.getOnNextEvents().get(0);
//
//        subscriber.assertNoErrors();
//        System.out.println(hello);
//        assertThat(resultFile).isEqualTo(dir);
    }
}

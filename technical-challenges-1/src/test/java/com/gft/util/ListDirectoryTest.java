package com.gft.util;

import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import com.google.common.jimfs.SystemJimfsFileSystemProvider;
import com.sun.org.apache.xerces.internal.util.SynchronizedSymbolTable;
import org.junit.Test;
import rx.Observable;
import rx.observers.TestSubscriber;

import java.io.File;
import java.io.IOException;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;

import static org.assertj.core.api.Assertions.assertThat;


public class ListDirectoryTest {

    @Test
    public void shouldReturnFilesStructureAsNode() throws IOException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix());
        Path foo = fs.getPath("/foo");
        Files.createDirectory(foo);
        Path hello = foo.resolve("hello.txt"); //

        System.out.println(hello);
        Observable<File> observable = FileService.convert(foo.toFile());
        TestSubscriber<File> subscriber = new TestSubscriber<>();

        observable.subscribe(System.out::println);

//        observable.subscribe(subscriber);
//        File resultFile = subscriber.getOnNextEvents().get(0);
//
//        subscriber.assertNoErrors();
//        System.out.println(hello);
//        assertThat(resultFile).isEqualTo(dir);
    }
}

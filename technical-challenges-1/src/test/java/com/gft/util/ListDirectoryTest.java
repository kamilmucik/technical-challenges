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
import java.nio.file.*;

import static org.assertj.core.api.Assertions.assertThat;


public class ListDirectoryTest {

    @Test
    public void shouldReturnFilesStructureAsNode() throws IOException {
        FileSystem fileSystem = Jimfs.newFileSystem(Configuration.unix());
        Path home = fileSystem.getPath("resources");
        Files.createDirectory(home);
//        Path hello = home.resolve("hello.txt"); //

        System.out.println(home);
        Files.newInputStream(home, StandardOpenOption.READ);
        Observable<File> observable = FileService.convert(home.toFile());
        TestSubscriber<File> subscriber = new TestSubscriber<>();



//        observable.subscribe(subscriber);
//        File resultFile = subscriber.getOnNextEvents().get(0);
//
//        subscriber.assertNoErrors();
//        System.out.println(hello);
//        assertThat(resultFile).isEqualTo(dir);
    }
}

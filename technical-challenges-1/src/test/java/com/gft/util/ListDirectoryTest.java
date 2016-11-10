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
import java.util.Iterator;

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
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix());
        Path home = fs.getPath("/data");
        Files.createDirectory(home);
        Path filePath = home.resolve("test1.pdf");
        Path anotherFilePath = home.resolve("test2.pdf");
        Files.createDirectory(filePath);
        Files.createDirectory(anotherFilePath);

        try (final DirectoryStream<Path> dirStream = Files.newDirectoryStream(home, "*.pdf")) {
            final Iterator<Path> pathIterator = dirStream.iterator();

            while (pathIterator.hasNext()){
                System.out.println(pathIterator.next());
            }
        }


//        Observable<File> observable = FileService.convert(home);
//        observable.subscribe(System.out::println,System.out::println,System.out::println);

    }
}

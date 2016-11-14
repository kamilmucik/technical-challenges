package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import com.gft.service.FileService;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.junit.Test;
import rx.Observable;
import rx.observers.TestSubscriber;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;

import static org.assertj.core.api.Assertions.assertThat;

public class ListDirectoryTest {

    @Test
    public void shouldReturnFilesStructureAsNode() throws IOException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix());
        Path home = fs.getPath("/data");
        Files.createDirectory(home);
        Path onePath = home.resolve("test.txt");
        Files.write(onePath, ImmutableList.of("1"), StandardCharsets.UTF_8);
        TestSubscriber<Path> subscriber = new TestSubscriber<>();

        Node<Path> rootNode = new NodeImpl<>(home);
        rootNode.getChildren().addAll(FileService.getNodeImplChildren(rootNode));
        Observable observable = NodeConverter.convert(new TreeConverter(rootNode));
        observable.subscribe(subscriber);

        subscriber.assertNoErrors();
        assertThat(subscriber.getOnNextEvents().iterator()).hasSize(1);
    }

}

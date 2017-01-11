package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import com.google.common.collect.ImmutableList;
import com.google.common.jimfs.Configuration;
import com.google.common.jimfs.Jimfs;
import org.assertj.core.api.AssertionsForClassTypes;
import org.junit.Test;
import rx.Observable;
import rx.subjects.ReplaySubject;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.FileSystem;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

public class TreeConverterTest {

    @Test
    public void shouldReturnFalseWhenNodeHasNotGotChildren(){
        Node<Path> n = new NodeImpl<>();
        TreeConverter<Path> tree = new TreeConverter<>(n);

        Iterator it = tree.iterator();

        assertThat(it.hasNext()).isFalse();
        assertThatThrownBy(it::next).isInstanceOf(NoSuchElementException.class);
    }

    @Test
    public void shouldReturnContainsValues(){
        Node<Path> root = new NodeImpl<>(Paths.get("root"));
        NodeImpl<Path> node1 = new NodeImpl<>(Paths.get("t1"));
        NodeImpl<Path> node2 = new NodeImpl<>(Paths.get("t2"));
        root.getChildren().add(node1);
        root.getChildren().add(node2);
        TreeConverter<Path> tree = new TreeConverter<>(root);

        Iterator<Path> it = tree.iterator();

        assertThat(it.hasNext()).isTrue();
        assertThat(it).containsExactly(node1.getPayload(),node2.getPayload());
    }

    @Test
    public void shouldReturnedSize(){
        NodeImpl<Node<Path>> node2 = new NodeImpl<>();
        node2.getChildren().add(new NodeImpl<>());
        NodeImpl<Node<Path>> root = new NodeImpl<>();
        root.getChildren().add(new NodeImpl<>(new NodeImpl(),new NodeImpl()));
        root.getChildren().add(node2);
        TreeConverter<Node<Path>> tree = new TreeConverter<>(root);

        Iterator it = tree.iterator();

        assertThat(it).hasSize(5);
    }

    @Test
    public void shouldReturnFilesStructureAsNode() throws IOException {
        FileSystem fs = Jimfs.newFileSystem(Configuration.unix());
        Path root = fs.getPath("/root");
        Files.createDirectory(root);
        Path onePath = root.resolve("test.txt");
        Files.write(onePath, ImmutableList.of("1"), StandardCharsets.UTF_8);
        Node<Path> rootNode = FileService.convertPathToNode(root);
        ReplaySubject<Path> subject = ReplaySubject.create();
        subject.onNext(onePath);
        TreeConverter<Path> tree = new TreeConverter<>(rootNode);
        Iterator it = tree.iterator();

        Observable observable = NodeConverter.convert(it);

        AssertionsForClassTypes.assertThat(observable.toBlocking().last()).isEqualTo(subject.toBlocking().first());
    }

}

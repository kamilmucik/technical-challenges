package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import com.gft.service.FileService;
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
import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

public class TreeConverterTest {

    @Test
    public void shouldReturnFalseWhenNodeHasNotGotChildren(){
        NodeImpl<Node<Path>> n = new NodeImpl<>();
        TreeConverter<Node<Path>> tree = new TreeConverter<>(n);

        Iterator it = tree.iterator();

        assertThat(it.hasNext()).isFalse();
        assertThatThrownBy(it::next).isInstanceOf(NoSuchElementException.class);
    }

    @Test
    public void shouldReturnContainsValues(){
        NodeImpl<Node<Path>> root = new NodeImpl<>();
        NodeImpl node1 = new NodeImpl<>();
        NodeImpl node2 = new NodeImpl<>();
        root.getChildren().add(new NodeImpl<>(node1,node2));
        TreeConverter<Node<Path>> tree = new TreeConverter<>(root);

        Iterator<Node<Path>> it = tree.iterator();

        assertThat(it.hasNext()).isTrue();
        assertThat(it).containsExactly(node1,node2);
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
        TreeConverter<Node<Path>> tree = new TreeConverter<>( new NodeImpl<>(rootNode));
        Iterator it = tree.iterator();

        Observable observable = NodeConverter.convert(it);

        AssertionsForClassTypes.assertThat(observable.toBlocking().last()).isEqualTo(subject.toBlocking().first());
    }

}

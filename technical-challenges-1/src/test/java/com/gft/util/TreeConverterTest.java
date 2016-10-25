package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import org.assertj.core.api.Assertions;
import org.junit.Test;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

public class TreeConverterTest {

    @Test
    public void shouldReturnFalseWhenNodeHasNotGotChildren(){
        TreeConverter tree = new TreeConverter(new NodeImpl());

        Iterator<Node> it = tree.iterator();

        Assertions.assertThat(it.hasNext()).isFalse();
        Assertions.assertThatThrownBy(() ->it.next()).isInstanceOf(NoSuchElementException.class);
    }

    @Test
    public void shouldReturnTreeLevelValues(){
        //TODO: przerobić na liczbę zmiennych
        NodeImpl root = new NodeImpl();
        root.getChildren().add(new NodeImpl(new NodeImpl(), new NodeImpl()));
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();

        Assertions.assertThat(it.hasNext()).isTrue();
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(0));
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(0).getChildren().get(0));
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(0).getChildren().get(1));
    }

}

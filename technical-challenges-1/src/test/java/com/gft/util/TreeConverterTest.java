package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import org.junit.Test;

import java.util.*;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;

public class TreeConverterTest {

    @Test
    public void shouldReturnFalseWhenNodeHasNotGotChildren(){
        Node n = new NodeImpl();
        TreeConverter tree = new TreeConverter(n);

        Iterator<Node> it = tree.iterator();

        assertThat(it.hasNext()).isFalse();
        assertThatThrownBy(it::next).isInstanceOf(NoSuchElementException.class);
    }

    @Test
    public void shouldReturnContainsValues(){
        NodeImpl root = new NodeImpl();
        NodeImpl node1 = new NodeImpl();
        NodeImpl node2 = new NodeImpl();
        root.getChildren().add(new NodeImpl(node1,node2));
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();

        assertThat(it.hasNext()).isTrue();
        assertThat(it).containsSequence(node1,node2);
    }

    @Test
    public void shouldReturnedSize(){
        NodeImpl node11 = new NodeImpl();
        NodeImpl node12 = new NodeImpl();
        NodeImpl node1 = new NodeImpl(node11,node12);
        NodeImpl node21 = new NodeImpl();
        NodeImpl node2 = new NodeImpl();
        node2.getChildren().add(node21);
        NodeImpl root = new NodeImpl();
        root.getChildren().add(node1);
        root.getChildren().add(node2);
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();

        assertThat(it).hasSize(5);
    }

}

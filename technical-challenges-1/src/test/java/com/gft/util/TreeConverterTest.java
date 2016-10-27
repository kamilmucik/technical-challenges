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
        TreeConverter tree = new TreeConverter(new NodeImpl());

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
    public void shouldReturnedExpectedValues(){
        NodeImpl root = new NodeImpl();
        NodeImpl node1 = new NodeImpl(new NodeImpl());
        NodeImpl node2 = new NodeImpl();
        root.getChildren().add(new NodeImpl(node1,node2));
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();

        assertThat(it).hasSize(4);
    }

}

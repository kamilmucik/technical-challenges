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

        NodeImpl node11 = new NodeImpl();
        NodeImpl node12 = new NodeImpl();
        NodeImpl node1 = new NodeImpl(node11,node12);
        NodeImpl node21 = new NodeImpl();
        NodeImpl node2 = new NodeImpl(node21);
        NodeImpl root = new NodeImpl(node1, node2);
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();

        System.out.println(root);
        System.out.println("\t" + node1);
        System.out.println("\t\t" + node11);
        System.out.println("\t\t" + node12);
        System.out.println("\t" + node2);
        System.out.println("\t\t" + node21);

        System.out.println();

//        assertThat(it.next()).isEqualTo(node2);
//        assertThat(it.next()).isEqualTo(node12);
//        assertThat(it.next()).isEqualTo(node21);

        while(it.hasNext()){
            Node n = it.next();
            System.out.println("s: " +  n);
        }

//        assertThat(it).hasSize(5);
    }

}

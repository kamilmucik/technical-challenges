package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import org.assertj.core.api.Assertions;
import org.junit.Test;

import java.util.Iterator;

public class TreeConverterTest {

    @Test
    public void shouldReturnFalseWhenNodeHasNotGotChildren(){
        TreeConverter tree = new TreeConverter(new NodeImpl());

        Iterator<Node> it = tree.iterator();

        Assertions.assertThat(it.hasNext()).isFalse();
    }

    @Test
    public void shouldReturnTreeLevelValues(){
        NodeImpl root = new NodeImpl();
        NodeImpl child1 = new NodeImpl();
        NodeImpl child11 = new NodeImpl();
        NodeImpl child12 = new NodeImpl();
        NodeImpl child13 = new NodeImpl();
        child1.addChild(child11);
//        child1.addChild(child12);
//        child1.addChild(child13);
        root.addChild(child1);
        NodeImpl child2 = new NodeImpl();
        NodeImpl child21 = new NodeImpl();
        child2.addChild(child21);
        root.addChild(child2);
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();

        Assertions.assertThat(it.hasNext()).isTrue();
        Assertions.assertThat(it.next()).isEqualTo(child1);
        Assertions.assertThat(it.next()).isEqualTo(child11);
//        Assertions.assertThat(it.next()).isEqualTo(child12);
//        Assertions.assertThat(it.next()).isEqualTo(child13);
        Assertions.assertThat(it.next()).isEqualTo(child2);
        Assertions.assertThat(it.next()).isEqualTo(child21);
    }

}

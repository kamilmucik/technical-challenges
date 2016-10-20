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
    public void shouldReturnWellKnownValues(){
        Node node = new NodeImpl();
        Node child1 = new NodeImpl();
        Node child11 = new NodeImpl();
        child1.addChild(child11);
        node.addChild(child1);
        TreeConverter tree = new TreeConverter(node);

        Iterator<Node> it = tree.iterator();

        Assertions.assertThat(it.hasNext()).isTrue();
        Assertions.assertThat(it.next()).isEqualTo(child1);
    }

}

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
import java.util.ArrayList;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

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
        root.getChildren().add(new NodeImpl(new NodeImpl(), new NodeImpl(), new NodeImpl()));
        root.getChildren().add(new NodeImpl());
        root.getChildren().get(0).getChildren().get(1).getChildren().add(new NodeImpl());
        root.getChildren().get(1).getChildren().add(new NodeImpl());
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();

        //TODO: sprawdzać czy element zawiera się w kolekcji, bez istotnej kolejności
        Assertions.assertThat(it.hasNext()).isTrue();
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(0));
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(0).getChildren().get(0));
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(0).getChildren().get(1));
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(0).getChildren().get(1).getChildren().get(0));
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(0).getChildren().get(2));
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(1));
        Assertions.assertThat(it.next()).isEqualTo(root.getChildren().get(1).getChildren().get(0));
    }

}

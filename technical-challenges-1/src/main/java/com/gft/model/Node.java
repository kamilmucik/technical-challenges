package com.gft.model;

import java.util.LinkedList;
import java.util.List;

public interface Node {

    List<Node> children = new LinkedList<>();

    default List<Node> getChildren() {return children;}

    default void addChild(Node node){children.add(node);}


}

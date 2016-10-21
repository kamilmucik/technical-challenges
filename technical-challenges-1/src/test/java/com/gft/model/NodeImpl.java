package com.gft.model;

import java.util.LinkedList;
import java.util.List;

public class NodeImpl implements Node {

    private List<Node> children = new LinkedList<>();

    @Override
    public List<Node> getChildren() {
        return children;
    }

    @Override
    public void addChild(Node node) {
        children.add(node);
    }


}

package com.gft.model;

import java.util.LinkedList;
import java.util.List;

public class NodeImpl implements Node {

    private List<Node> children = new LinkedList<>();

    public NodeImpl(){}

    public NodeImpl(List<Node> children){
        this.children = children;
    }

    @Override
    public List<Node> getChildren() {
        return children;
    }

    public void addChild(Node node) {
        children.add(node);
    }

}

package com.gft.model;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class NodeImpl implements Node {

    private List<Node> children = new LinkedList<>();

    public NodeImpl(){}

    public NodeImpl(Node... children){
        this.children = Arrays.asList(children);
    }

    @Override
    public List<Node> getChildren() {
        return children;
    }
}

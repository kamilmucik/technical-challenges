package com.gft.model;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public class NodeImpl implements Node {

    private List<Node> children = new LinkedList<>();

    private String name;

    public NodeImpl(){}

    public NodeImpl(String name){
        this.name = name;
    }

    public NodeImpl(Node... children){
        this.children = Arrays.asList(children);
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public List<Node> getChildren() {
        return children;
    }

    @Override
    public String toString(){
        return name + " -> " + children.size();
    }
}

package com.gft.model;

import org.jetbrains.annotations.NotNull;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public final class NodeImpl<T> implements Node<T> {

    private List<Node<T>> children = new LinkedList<>();

    private T payload;

    public NodeImpl() {}

    public NodeImpl(T payload) {
        super();
        this.payload = payload;
    }

    public NodeImpl(Node... children) {
        this.children = Arrays.asList(children);
    }

    @NotNull
    @Override
    public List<Node<T>> getChildren() {
        return children;
    }

    @Override
    public T getPayload() {
        return payload;
    }

    public void setChildren(List<Node<T>> children) {
        this.children = children;
    }



}

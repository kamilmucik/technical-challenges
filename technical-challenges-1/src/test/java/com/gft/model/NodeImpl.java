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
        this.payload = payload;
    }

    @SuppressWarnings("unchecked")
    public NodeImpl(Node<T>... children) {
        this.children = Arrays.asList(children);
    }

    @NotNull
    @Override
    public List<Node<T>> getChildren() {
        return children;
    }

    @NotNull
    @Override
    public void setChildren(List<Node<T>> children) {
        this.children = children;
    }

    public T getPayload() {
        return payload;
    }

    @Override
    public void setPayload(T t) {
        this.payload = t;
    }
}

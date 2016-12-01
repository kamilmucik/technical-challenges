package com.gft.model;

import org.jetbrains.annotations.NotNull;

import java.util.Arrays;
import java.util.LinkedList;
import java.util.List;

public final class NodeImpl<T> implements Node<T> {

    private List<Node> children = new LinkedList<>();

    private T payload;

    public NodeImpl() {}

    public NodeImpl(T payload) {
        this.payload = payload;
    }

    @SuppressWarnings("unchecked")
    public NodeImpl(Node... children) {
        this.children = Arrays.asList(children);
    }

    @NotNull
    @Override
    public List<Node> getChildren() {
        return children;
    }

    public T getPayload() {
        return payload;
    }

}

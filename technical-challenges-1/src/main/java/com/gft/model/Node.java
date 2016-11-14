package com.gft.model;

import org.jetbrains.annotations.NotNull;

import java.util.List;

public interface Node<T> {
    /**
     * Return list of children, otherwise rerutn empty list.
     * @return List of own Type
     */
    @NotNull
    List<Node<T>> getChildren();

    @NotNull
    void setChildren(List<Node<T>> children);

    /**
     * Return payload.
     * @return payload of own type
     */
    T getPayload();

    void setPayload(T t);

}

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

    /**
     * Return payload.
     * @return payload of own type
     */
    T getPayload();

}

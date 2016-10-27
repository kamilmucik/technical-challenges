package com.gft.model;

import org.jetbrains.annotations.NotNull;

import java.util.List;

public interface Node {
    /**
     *
     * @return
     */
    @NotNull
    List<Node> getChildren();

}

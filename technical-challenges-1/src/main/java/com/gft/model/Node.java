package com.gft.model;

import java.util.List;

public interface Node {

    List<Node> getChildren();

    void addChild(Node node);

}

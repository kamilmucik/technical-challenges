package com.gft.util;

import com.gft.model.Node;

import java.util.Iterator;

public class TreeConverter implements Iterable<Node> {

    private Node node;

    public TreeConverter(Node node) {
        this.node = node;
    }

    @Override
    public Iterator<Node> iterator() {
        return new TreeConverterIterator(this.node);
    }

    private static class TreeConverterIterator implements Iterator<Node> {

        private Node node;

        public TreeConverterIterator(Node node){
            this.node = node;
        }

        @Override
        public boolean hasNext() {
            if (node.getChildren().size() != 0) {
                return true;
            }
            return false;
        }

        @Override
        public Node next() {

            return null;
        }
    }
}

package com.gft.util;

import com.gft.model.Node;

import java.util.Iterator;

class TreeConverter implements Iterable<Node> {

    private Node node;

    TreeConverter(Node node) {
        this.node = node;
    }

    @Override
    public Iterator<Node> iterator() {
        return new TreeConverterIterator(node);
    }

    private static class TreeConverterIterator implements Iterator<Node> {

        private Node node;

        TreeConverterIterator(Node node){
            this.node = node;
        }

        @Override
        public boolean hasNext() {
            return (node.getChildren().size() != 0);
        }

        @Override
        public Node next() {

            return null;
        }
    }
}

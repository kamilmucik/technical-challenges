package com.gft.util;

import com.gft.model.Node;

import java.util.*;

class TreeConverter implements Iterable<Node> {

    private Node node;

    TreeConverter(Node node) {
        this.node = node;
    }

    @Override
    public Iterator<Node> iterator() {
        return new TreeConverterIterator(node);
    }

    /**
     * Iterator convert tree-based structure to flat iterable collection.
     */
    private static class TreeConverterIterator implements Iterator<Node> {

        /**
         *
         */
        private final Stack<Node> nodes = new Stack<>();

        private Node nextNode;

        TreeConverterIterator(Node root) {
            nodes.addAll(root.getChildren());
            findNextNode();
        }

        /**
         * Method return true when nextNode has children, otherwise return false
         * @return boolean
         */
        @Override
        public boolean hasNext() {
            return nextNode != null;
        }

        /**
         * Method return nextNode from tree, in case when has children, otherwise return NoSuchElementException
         * @return Node or NoSuchElementException
         */
        @Override
        public Node next() throws NoSuchElementException {
            if (nextNode == null)
                throw new NoSuchElementException();
            Node tmp = nextNode;
            findNextNode();
            return tmp;
        }

        private void findNextNode() {
            nextNode = null;
            while (nextNode == null && !nodes.isEmpty()) {
                Node tmp = nodes.remove(0);
                for (int i = tmp.getChildren().size()-1; i >= 0; i--) {
                    nodes.add(0, tmp.getChildren().get(i));
                }
                nextNode = tmp;
            }
        }

    }
}

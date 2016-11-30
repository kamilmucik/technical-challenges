package com.gft.util;

import com.gft.model.Node;

import java.util.*;

class TreeConverter implements Iterable {

    private Node t;

    TreeConverter(Node t) {
        this.t = t;
    }

    @Override
    public Iterator iterator() {
        return new TreeConverterIterator(t);
    }

    /**
     * Iterator convert tree-based structure to flat iterable collection.
     */
    private static class TreeConverterIterator implements Iterator  {

        private final Vector<Object> knownNodes = new Vector<>();

        TreeConverterIterator(Node root) {
            knownNodes.addAll(root.getChildren());
        }

        /**
         * Method return true when nextNode has children, otherwise return false
         *
         * @return boolean
         */
        @Override
        public boolean hasNext() {
            return !this.knownNodes.isEmpty();
        }

        /**
         * Method return nextNode from tree, in case when has children, otherwise return NoSuchElementException
         *
         * @return Node or NoSuchElementException
         */
        @Override
        public Node next() throws NoSuchElementException {
            if (this.knownNodes.isEmpty())
                throw new NoSuchElementException();
            Node nextNode = (Node)knownNodes.remove(0);
            for (int i = nextNode.getChildren().size() - 1; i >= 0; i--) {
                knownNodes.add(0, nextNode.getChildren().get(i));
            }
            return nextNode;
        }
    }
}

package com.gft.util;

import com.gft.model.Node;

import java.util.*;

class TreeConverter <T extends Node> implements Iterable<T> {

    private final Node<T> rootNode;

    TreeConverter(Node<T> rootNode) {
        this.rootNode = rootNode;
    }

    @Override
    public Iterator<T> iterator() {
        return new TreeConverterIterator(rootNode);
    }

    /**
     * Iterator convert tree-based structure to flat iterable collection.
     */
    private class TreeConverterIterator implements Iterator<T>  {

        private final Vector<Node<T>> knownNodes = new Vector<>();

        TreeConverterIterator(Node<T> root) {
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
        public T next() throws NoSuchElementException {
            if (this.knownNodes.isEmpty())
                throw new NoSuchElementException();
            Node<T> nextNode = knownNodes.remove(0);
            for (int i = nextNode.getChildren().size() - 1; i >= 0; i--) {
                knownNodes.add(0, nextNode.getChildren().get(i));
            }
            return nextNode.getPayload();
        }
    }
}
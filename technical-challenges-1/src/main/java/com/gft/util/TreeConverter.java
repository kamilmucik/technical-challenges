package com.gft.util;

import com.gft.model.Node;

import java.util.*;

class TreeConverter<T extends Node<T>> implements Iterable<T> {

    private T t;

    TreeConverter(T t) {
        this.t = t;
    }

    @Override
    public Iterator<T> iterator() {
        return new TreeConverterIterator(t);
    }

    /**
     * Iterator convert tree-based structure to flat iterable collection.
     */
    private static class TreeConverterIterator<T extends Node> implements Iterator<T>  {

        private final Vector<T> knownNodes = new Vector<>();

        TreeConverterIterator(T root) {
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
            T nextNode = knownNodes.remove(0);
            for (int i = nextNode.getChildren().size() - 1; i >= 0; i--) {
                knownNodes.add(0, (T)nextNode.getChildren().get(i));
            }
            return nextNode;
        }
    }
}

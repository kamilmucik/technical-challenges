package com.gft.util;

import com.gft.model.Node;

import java.util.Iterator;
import java.util.NoSuchElementException;
import java.util.Optional;

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

        private final Node root;

        private Node lastEntry;

        private boolean isIteratorFinished = false;

        private boolean nextEntryWillBeResult = false;

        TreeConverterIterator(Node root){
            this.root = root;
        }

        /**
         * Method return true when root has children, otherwise return false
         * @return boolean
         */
        @Override
        public boolean hasNext() {
            Node tmp = lastEntry;
            try {
                return this.getNodes(root).isPresent();
            } finally {
                if (lastEntry == tmp){
                    lastEntry = null;
                    isIteratorFinished = true;
                } else {
                    lastEntry = tmp;
                }
            }
        }

        /**
         * Method return root in tree. In case when has children, otherwise return null
         * @return Node
         */
        @Override
        public Node next() throws NoSuchElementException {
            Optional<Node> tmp = Optional.empty();
            if (!isIteratorFinished)
                tmp = this.getNodes(root);

            if(tmp.isPresent()) {
                return tmp.get();
            } else {
                this.lastEntry = null;
                throw new NoSuchElementException();
            }
        }

        private Optional<Node> getNodes(Node node){
            Optional<Node> tmp = Optional.empty();
            for (Node n : node.getChildren()) {
                if (lastEntry == null){
                    lastEntry = n;
                    return Optional.of(lastEntry);
                }
                if (nextEntryWillBeResult){
                    lastEntry = n;
                    tmp = Optional.of(lastEntry);
                    nextEntryWillBeResult = false;
                    break;
                }
                if ( n == lastEntry) {
                    nextEntryWillBeResult =true;
                }
                tmp = getNodes(n);
                if (tmp.isPresent()) break;
            }
            return tmp;
        }
    }
}

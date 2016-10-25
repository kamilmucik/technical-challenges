package com.gft.util;

import com.gft.model.Node;

import java.util.Iterator;
import java.util.NoSuchElementException;

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

        private Node node;

        private Node nextEntry;

        private boolean isIteratorFinished = false;

        private boolean nextEntryWillByResult = false;

        TreeConverterIterator(Node node){
            this.node = node;
        }

        /**
         * Method return true when node has children, otherwise return false
         * @return boolean
         */
        @Override
        public boolean hasNext() {
            Node tmp = nextEntry;
            try {
                return (this.getNodes(node)!= null);
            } finally {
                if (nextEntry == tmp){
                    nextEntry = null;
                    isIteratorFinished = true;
                } else {
                    nextEntry = tmp;
                }
            }
        }

        /**
         * Method return node in tree. In case when has children, otherwise return null
         * @return Node
         */
        @Override
        public Node next() throws NoSuchElementException {
            Node tmp = null;

            if (!isIteratorFinished)
                tmp = this.getNodes(node);

            if(tmp == null) {
                this.nextEntry = null;
                throw new NoSuchElementException();
            } else {
                return tmp;
            }
        }

        //TODO:skorzystać z Optionala
         Node getNodes(Node node){
            Node tmp = null;
            for (Node n : node.getChildren()) {
                if (nextEntry == null){
                    nextEntry = n;
                    return nextEntry;
                }
                if (nextEntryWillByResult){
                    tmp = nextEntry = n;
                    nextEntryWillByResult = false;
                    break;
                }
                if ( n == nextEntry) {
                    nextEntryWillByResult=true;
                }
                tmp = getNodes(n);
                if (tmp != null) break;
            }
            return tmp;
        }
    }
}

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

    /**
     * Iterator convert tree-based structure to flat iterable collection.
     */
    private static class TreeConverterIterator implements Iterator<Node> {

        private Node node;

        private int size = 0;

        private boolean isElementFind = false;

        /**
         * Variable is information which element is necessary to return
         */
        private int expectedPointer = 0;

        /**
         * Variable is information about current processing object
         */
        private int elementPointer = 0;

        TreeConverterIterator(Node node){
            this.node = node;
            calculateOffspring(node);
        }

        /**
         * Method return true when node has children, otherwise return false
         * @return boolean
         */
        @Override
        public boolean hasNext() {
            return (elementPointer < size);
        }

        /**
         * Method return node in tree. In case when has children, otherwise return null
         * @return Node
         */
        @Override
        public Node next() {
            isElementFind = false;
            elementPointer = 0;
            expectedPointer++;
            return getNodes(node);
        }

        //TODO:skorzystać z Optionala
         Node getNodes(Node node){
            Node tmp = null;
            for (Node n : node.getChildren()) {
                elementPointer++;
                if (elementPointer == expectedPointer) {
                    tmp = n;
                    isElementFind = true;
                }
                if (isElementFind) break;
                tmp = getNodes(n);
            }
            return tmp;
        }


        //TODO: nie ładować do pamięci wszystkich elementów z licznieniem
        void calculateOffspring(Node node) {
            size += node.getChildren().size();
            for ( int i = 0; i < node.getChildren().size(); i++) {
                calculateOffspring(node.getChildren().get(i));
            }
        }
    }
}

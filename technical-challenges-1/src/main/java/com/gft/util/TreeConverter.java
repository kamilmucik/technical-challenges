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

        private int childIndex = 0;

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
        }

        /**
         * Method return true when node has children, otherwise return false
         * @return boolean
         */
        @Override
        public boolean hasNext() {



            return childIndex < node.getChildren().size();
        }

        /**
         * Method return node in tree. In case when has children, otherwise
         * @return Node
         */
        @Override
        public Node next() {
            elementPointer = 0;
            expectedPointer++;

            return getChildren(node);
        }

        Node getChildren (Node node) {
            elementPointer++;
            Node tmp = null;
            if (elementPointer == expectedPointer) {
                return node;
            }
            if (node.getChildren().size() > 0) {
                for ( int i = childIndex; i < node.getChildren().size(); i++){
                    tmp = getChildren(node.getChildren().get(i));
                }
            }
            return tmp;
        }
    }
}

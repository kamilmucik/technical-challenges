package com.gft.util;

import com.gft.model.Node;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

class TreeConverter implements Iterable<Node> {

    private Node node;

    /**
     * Counter show level of deep tree
     */
    private int deepCounter;

    /**
     * Counter represent information 'which nods is show'
     */
    private int elementCounter;

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

        private int deepIndex = 0;

        private int counter = 0;

        private int elementCounter = 0;

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
            childIndex = 0;
            deepIndex = 0;
            elementCounter = 0;
            counter++;

            return getChildren(node);
        }

        Node getChildren (Node node){
            elementCounter++;

            for (int i =0 ; i < deepIndex; i++){
                System.out.print("\t");
            }

            if (elementCounter == counter) {
                System.out.println("ten");
                return node;
            } else
                System.out.println("deepIndex[" + deepIndex + "]["+childIndex+"]["+counter+"]["+elementCounter+"] : " + node.getChildren().size() + " : " + node);

            deepIndex++;
            if (node.getChildren().size() > 0) {
                for ( int i = childIndex; i < node.getChildren().size(); i++){
                    childIndex = i;
                    Node tmp = getChildren(node.getChildren().get(i));
                    if (tmp != null){
                        return tmp;
                    }
                }
            }
            deepIndex--;
            return null;
        }


    }
}

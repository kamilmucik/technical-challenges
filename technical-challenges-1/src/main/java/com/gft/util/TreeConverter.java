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
     * Iterator conwertuje strukturę katalogów na strukturę drzewiastą
     */
    private static class TreeConverterIterator implements Iterator<Node> {

        private Node node;

        private int size = 0;

        private int deepIndex = 0;

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
            return (elementPointer <= size)?true:false;
        }

        /**
         * Method return node in tree. In case when has children, otherwise return null
         * @return Node
         */
        @Override
        public Node next() {
            elementPointer = 0;
            expectedPointer++;

            Node tmp = null;
            System.out.println("size: " + size);
            tmp = getNodes(node);
            return tmp;
        }

        Node getNodes(Node node){
            deepIndex++;

            Node tmp = null;
            if (node.getChildren().size() == 0){
                elementPointer++;
                for (int i =0 ; i < deepIndex; i++){System.out.print("\t");}
                System.out.println("node: " + node + " : " + elementPointer + " : " + expectedPointer + " : " + node.getChildren().size());
                tmp = node;

            } else
                for (final Node n : node.getChildren()){
                    elementPointer++;

                    for (int i =0 ; i < deepIndex; i++){System.out.print("\t");}
                    System.out.println("node: " + n + " : " + elementPointer + " : " + expectedPointer + " : " + n.getChildren().size());
                    if (elementPointer == expectedPointer) {
                        tmp = n;
                        break;
                    }

                    for ( int i = 0; i < n.getChildren().size(); i++) {
                        tmp = getNodes(n.getChildren().get(i));
                        if (elementPointer == expectedPointer) {
                            break;
                        }
                    }
                }

            deepIndex--;


            return tmp;
        }

        void calculateOffspring(Node node) {
            size += node.getChildren().size();
                for ( int i = 0; i < node.getChildren().size(); i++) {
                    calculateOffspring(node.getChildren().get(i));
                }
        }
    }
}

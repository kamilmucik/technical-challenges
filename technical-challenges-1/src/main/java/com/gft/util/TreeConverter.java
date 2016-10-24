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
            return (elementPointer < size)?true:false;
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

            Node n = getNodes(node);

            System.out.println("n: " + n);
            return n;
        }

        Node getNodes(Node node){
            deepIndex++;
            Node tmp = null;


            if (node.getChildren().size() == 0){
//                elementPointer++;
                if (elementPointer == expectedPointer) {
                    isElementFind = true;
                    tmp = node;
                }

//                for (int i =0 ; i < deepIndex; i++){System.out.print("\t");}
//                System.out.println("node>: " + node + " : " + elementPointer + " : " + expectedPointer + " : " + isElementFind + " : " +  + node.getChildren().size());

            } else {
//                System.out.println("in["+node.getChildren().size()+"]: " + ((node.getChildren().size() == 0)?true:false));
                for (Node n : node.getChildren()) {

                    elementPointer++;
                    if (isElementFind) continue;

                    if (elementPointer == expectedPointer) {
                        tmp = n;
                        isElementFind = true;

                        for (int i =0 ; i < deepIndex; i++){System.out.print("\t");}
                        System.out.println("node: " + n + " : " + elementPointer + " : " + expectedPointer + " : " + isElementFind + " : " + n.getChildren().size());

                    }

//                    for (int i =0 ; i < deepIndex; i++){System.out.print("\t");}
//                    System.out.println("node: " + n + " : " + elementPointer + " : " + expectedPointer + " : " + isElementFind + " : " + n.getChildren().size());

                    if (isElementFind) continue;

//                    for (int i = 0; i < n.getChildren().size(); i++) {
//                        if (isElementFind) {
//                            continue;
//                        }
                        tmp = getNodes(n);

//                    }
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

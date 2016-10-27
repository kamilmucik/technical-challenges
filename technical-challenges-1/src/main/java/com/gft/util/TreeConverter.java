package com.gft.util;

import com.gft.model.Node;
import com.sun.org.apache.xerces.internal.dom.NodeImpl;

import java.util.*;

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

        private Node root;

        private Node nextEntry;

        private int currentEntryChildIndex = 0;
        private List<Node> currentEntryChild;

        private Stack directories;

        private boolean shouldShowDirectory = false;

        private boolean isIteratorFinished = false;

        TreeConverterIterator(Node root){
            this.root = root;
            this.currentEntryChild = root.getChildren();
            this.directories = new Stack();
        }

        /**
         * Method return true when root has children, otherwise return false
         * @return boolean
         */
        @Override
        public boolean hasNext() {
            if(isIteratorFinished)
                return false;
            return getNextNode() != null;
        }

        /**
         * Method return root in tree. In case when has children, otherwise return null
         * @return Node
         */
        @Override
        public Node next() throws NoSuchElementException {
//            Optional<Node> tmp = Optional.empty();
//            if (!isIteratorFinished)
//                tmp = this.getNodes(root);
//
//            if(tmp.isPresent()) {
//                return tmp.get();
//            } else {
//                this.lastEntry = null;
//                throw new NoSuchElementException();
//            }

            if(isIteratorFinished)
                throw new NoSuchElementException();

            Node node = getNextNode();
            if(node == null){
                throw new NoSuchElementException();
            }
            this.nextEntry = null;
            return node;
        }

        private Node getNextNode(){
            if(nextEntry == null){
                nextEntry = getNode();
            }
            return nextEntry;
        }

        private Node getNode(){

            if (shouldShowDirectory) {
                shouldShowDirectory = false;
                return root;
            }

            while(currentEntryChildIndex < currentEntryChild.size()){
                if(currentEntryChild.get(currentEntryChildIndex).getChildren().size() > 0){
                    directories.push(currentEntryChild.get(currentEntryChildIndex));
                    currentEntryChildIndex++;
                } else {
                    Node node = currentEntryChild.get(currentEntryChildIndex);
                    currentEntryChildIndex++;
                    return node;
                }
            }



            while(!directories.empty()){
                Node directory = (Node)directories.remove(0);
                //TODO: wyświetlanie katalogu w pierwszej kolejności
                root = directory;
                currentEntryChild = directory.getChildren();
                currentEntryChildIndex = 0;
                shouldShowDirectory = true;


                Node node = getNode();

                if(node != null){
                    return node;
                }
            }

            isIteratorFinished = true;

            return null;
        }

//        private Optional<Node> getNodes(Node node){
//            Optional<Node> tmp = Optional.empty();
//            for (Node n : node.getChildren()) {
//                if (lastEntry == null){
//                    lastEntry = n;
//                    return Optional.of(lastEntry);
//                }
//                if (nextEntryWillBeResult){
//                    lastEntry = n;
//                    tmp = Optional.of(lastEntry);
//                    nextEntryWillBeResult = false;
//                    break;
//                }
//                if ( n == lastEntry) {
//                    nextEntryWillBeResult =true;
//                }
//                tmp = getNodes(n);
//                if (tmp.isPresent()) break;
//            }
//            return tmp;
//        }
    }
}

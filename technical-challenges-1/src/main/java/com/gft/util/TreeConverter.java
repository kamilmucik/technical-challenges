package com.gft.util;

import com.gft.model.Node;

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

        private Node parentDirectory;

        private Node nextEntry;

        private int currentEntryChildIndex = 0;

        private List<Node> currentEntryChild;

        private Stack directories;

        private boolean shouldReturnDirectory = false;

        private boolean isIteratorFinished = false;

        TreeConverterIterator(Node root){
            this.parentDirectory = root;
            this.currentEntryChild = root.getChildren();
            this.directories = new Stack();
        }

        /**
         * Method return true when parentDirectory has children, otherwise return false
         * @return boolean
         */
        @Override
        public boolean hasNext() {
            return !isIteratorFinished && getNextNode() != null;
        }

        /**
         * Method return parentDirectory in tree. In case when has children, otherwise return NoSuchElementException
         * @return Node or NoSuchElementException
         */
        @Override
        public Node next() throws NoSuchElementException {
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
                Optional<Node> tmp =getNode();
                System.out.println(tmp);
                if (!Optional.empty().equals(tmp))
                    nextEntry = tmp.get();
            }

            return nextEntry;
        }

        private Optional<Node> getNode(){
            if (shouldReturnDirectory) {
                shouldReturnDirectory = false;
                return Optional.of(parentDirectory);
            }

            while(currentEntryChildIndex < currentEntryChild.size()){
                if(currentEntryChild.get(currentEntryChildIndex).getChildren().size() > 0){
                    directories.push(currentEntryChild.get(currentEntryChildIndex));
                    currentEntryChildIndex++;
                } else {
                    Node node = currentEntryChild.get(currentEntryChildIndex);
                    currentEntryChildIndex++;
                    return Optional.of(node);
                }
            }

            while(!directories.empty()){
                Node directory = (Node)directories.remove(0);
                parentDirectory = directory;
                currentEntryChild = directory.getChildren();
                currentEntryChildIndex = 0;
                shouldReturnDirectory = true;

                Optional<Node> node = getNode();
                if(node.isPresent()){
                    return node;
                }
            }

            isIteratorFinished = true;
            return Optional.empty();
        }
    }
}

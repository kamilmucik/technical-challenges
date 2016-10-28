package com.gft.util;

import com.gft.model.Node;

import java.util.*;

/**
 * @see 'https://en.wikipedia.org/wiki/Command%E2%80%93query_separation'
 */
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

        private Node parentNode;

        /**
         * Value can be set in hasNest or next method, with invoke proxy method getNextNode if value is null
         */
        private Node preparedEntry;

        //TODO: zmniejszyć liczbę zmeinnych i listę zamienić na kolejkę
        private int currentEntryChildIndex = 0;

        private List<Node> currentEntryChild;

        private Stack directories;

        private boolean shouldReturnDirectory = false;

        private boolean isIteratorFinished = false;

        TreeConverterIterator(Node root) {
            this.parentNode = root;// nie potrzebne w tym miejscu
            this.currentEntryChild = root.getChildren();
            this.directories = new Stack();// nie potrzebne w tym miejscu
        }

        /**
         * Method return true when parentNode has children, otherwise return false
         * Nie powinno być efektów ubocznych, nie zmienia stanu obiektu
         * @return boolean
         */
        @Override
        public boolean hasNext() {
            if(isIteratorFinished)
                return false;
            return getNextNode() != null;
        }

        /**
         * Method return parentNode in tree. In case when has children, otherwise return NoSuchElementException
         * @return Node or NoSuchElementException
         */
        @Override
        public Node next() throws NoSuchElementException {
            if(isIteratorFinished)
                throw new NoSuchElementException();

            Node node = getNextNode();
            if (node == null) {
                throw new NoSuchElementException();
            }
            this.preparedEntry = null;
            return node;
        }

        //TODO: za dużo kodu
        //TODO: albo zwracam,
        private Node getNextNode() {
            if(preparedEntry == null) {
                Optional<Node> tmp = getNode();
                if (!Optional.empty().equals(tmp))
                    preparedEntry = tmp.get();
            }

            return preparedEntry;
        }

        private Optional<Node> getNode() {
            if (shouldReturnDirectory) {
                shouldReturnDirectory = false;
                return Optional.of(parentNode);
            }

            while(currentEntryChildIndex < currentEntryChild.size()) {
                if(currentEntryChild.get(currentEntryChildIndex).getChildren().size() > 0) {
                    directories.push(currentEntryChild.get(currentEntryChildIndex));
                    currentEntryChildIndex++;
                } else {
                    Node node = currentEntryChild.get(currentEntryChildIndex);
                    currentEntryChildIndex++;
                    return Optional.of(node);
                }
            }

            while(!directories.empty()) {
                Node directory = (Node)directories.remove(0);
                parentNode = directory;
                currentEntryChild = directory.getChildren();
                currentEntryChildIndex = 0;
                shouldReturnDirectory = true;

                return getNode();
            }

            isIteratorFinished = true;
            return Optional.empty();
        }
    }
}

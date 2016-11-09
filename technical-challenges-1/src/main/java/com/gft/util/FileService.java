package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;

import java.io.File;
import java.util.LinkedList;
import java.util.List;

final class FileService {

    NodeImpl<File> getTree(String startingDirPath) {
        NodeImpl<File> rootNode = new NodeImpl<>(new File(startingDirPath));
        rootNode.setChildren(getSubTree(rootNode));
        return rootNode;
    }

    private List<Node<File>> getSubTree(NodeImpl<File> dirNode) {
        List<Node<File>> children = new LinkedList<>();
        for (File entry : getFilesDirsDir(dirNode.getPayload())) {
            NodeImpl<File> node = new NodeImpl<>(new File(entry.getPath()));
            children.add(node);
            if (entry.isDirectory()) {
                node.setChildren(getSubTree(node));
            }
        }
        return children;
    }


    private List<File> getFilesDirsDir(File dir) throws NullPointerException{
        List<File> filesDirs = new LinkedList<>();
        for(File f : dir.listFiles())
           filesDirs.add(new File(f.getPath()));
        return filesDirs;
    }


}

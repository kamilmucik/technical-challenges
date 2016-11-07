package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;

class FileService {

    /**
     * Method represent tree file structure as tree Node structure
     * @param rootPath - existing path in filesystem
     * @param root - refernce to existing object
     */
    private static void getNodesFromPath(Path rootPath, Node root) {
        try {
            DirectoryStream<Path> stream = Files.newDirectoryStream(rootPath);
            for (Path entry : stream) {
                Node tmp = new NodeImpl(entry.getFileName().toString());
                if (Files.isDirectory(entry)) {
                    getNodesFromPath(entry, tmp);
                }
                root.getChildren().add(tmp);
            }
            stream.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * Method return file tree structure as new NodeImpl instance
     * @param rootPath - existing path in filesystem
     * @return Node as tree structure
     */
    static Node getNodesFromPath(Path rootPath) {
        Node root = new NodeImpl();
        getNodesFromPath(rootPath, root);
        return root;
    }
}

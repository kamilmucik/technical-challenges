package com.gft.service;

import com.gft.model.Node;
import com.gft.model.NodeImpl;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;

public class FileService {
    /**
     * Method convert tree structure to Node type
     * @param parentNode Path as root in tree structure
     * @return Node with path as payload
     */
     public static Node<Path> convertPathToNode(Path parentNode) {
         Node<Path> resultNode = new NodeImpl<>(parentNode);
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(parentNode)) {
            for (Path entry : stream) {
                if (Files.isDirectory(entry)) {
                    resultNode.getChildren().add(convertPathToNode(entry));
                } else {
                    resultNode.getChildren().add(new NodeImpl<>(entry));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return resultNode;
     }


}

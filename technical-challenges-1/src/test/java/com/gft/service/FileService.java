package com.gft.service;

import com.gft.model.Node;
import com.gft.model.NodeImpl;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.LinkedList;
import java.util.List;

public class FileService {

     public static List<Node<Path>> getNodeImplChildren(Node<Path> parentNode) {
        List<Node<Path>> children = new LinkedList<>();
        try (DirectoryStream<Path> stream = Files.newDirectoryStream(parentNode.getPayload())) {
            for (Path entry : stream) {
                children.add(new NodeImpl<>(entry));
                if (Files.isDirectory(entry)) {
                    children.addAll(getNodeImplChildren(new NodeImpl<>(entry)));
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return children;
    }
}

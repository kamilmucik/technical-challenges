package com.gft.util;

import com.gft.model.Node;
import com.gft.model.NodeImpl;
import rx.Observable;

import java.io.File;
import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

final class FileService {

//    static <T> Observable<T> convert(Iterable<Node<T>> root){
//
//    }

     static Observable<File> convert(File root){
//        Node<File> rootNode = new NodeImpl<>(root);
//        rootNode.getChildren().addAll(getNodeImplChildren(rootNode));
//        Iterator<Node> it = new TreeConverter(rootNode).iterator();

//        return Observable.create(s -> {
//            while (it.hasNext()) {
//                s.onNext(((File)it.next().getPayload()));
//            }
//            s.onCompleted();
//        });
         return null;
    }

    private static List<Node<File>> getNodeImplChildren(Node<File> parentNode) {
        List<Node<File>> children = new LinkedList<>();
        File[] files = null;
        try {
            files = parentNode.getPayload().listFiles();
        }catch (NullPointerException e){
            e.printStackTrace();
        }
        if (null != files)
            for (File entry : files) {
                NodeImpl<File> node = new NodeImpl<>(new File(entry.getPath()));
                children.add(node);
                if (entry.isDirectory()) {
                    node.setChildren(getNodeImplChildren(node));
                }
            }
        return children;
    }
}

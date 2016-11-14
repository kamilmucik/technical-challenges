package com.gft.util;

import com.gft.model.Node;
import rx.Observable;

import java.io.File;
import java.util.Iterator;

final class FileService {

    static <T> Observable<T> convert(Iterable<Node<T>> root){
        Iterator<Node<T>> it = root.iterator();
        return Observable.create(s -> {
            while (it.hasNext()) {
                while (it.hasNext()) {
                    s.onNext( it.next().getPayload() );
                }
            }
            s.onCompleted();
        });
    }

    static Observable<File> convert(Node root){
         return convert(new TreeConverter(root));
    }


}
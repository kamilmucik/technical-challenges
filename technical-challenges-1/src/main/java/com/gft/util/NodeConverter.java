package com.gft.util;

import com.gft.model.Node;
import rx.Observable;

import java.util.Iterator;

final class NodeConverter {

    /**
     * Convert Node with payload to reactive stream
     * @param root main object in tree structure to iterate
     * @param <T> Generic type of Node
     * @return generic param
     */
    static <T> Observable<T> convert(Iterable<Node<T>> root){
        Iterator<Node<T>> it = root.iterator();
        return Observable.create(s -> {
            while (it.hasNext()) {
                s.onNext(it.next().getPayload());
            }
            s.onCompleted();
        });
    }

}
package com.gft.util;

import com.gft.model.Node;
import rx.Observable;

import java.util.Iterator;

final class NodeConverter {

    /**
     * Convert Node with payload to reactive stream
     * @param root main object in tree structure to iterate
     * @return generic param
     */
    static  Observable<Object> convert(Iterator root){
        return Observable.create(s -> {
            while (root.hasNext()) {
                s.onNext((root.next()));
            }
            s.onCompleted();
        });
    }

}
package com.gft.util;

import rx.Observable;

import java.util.Iterator;
import java.util.List;
import java.util.concurrent.CompletableFuture;

final class NodeConverter {

    /**
     * Convert Node with payload to reactive stream
     * @param root main object in tree structure to iterate
     * @return java.lang.Object param
     */
    static  Observable<Object> convert(Iterator root){
        return Observable.create(s -> {
            while (root.hasNext()) {
                s.onNext((root.next()));
            }
            s.onCompleted();
        });
    }

    /**
     * Method convert CompletableFuture object to Observable stream
     * @param future generic stream
     * @param <T> generic type
     * @return Generic return type
     */
    static <T> Observable<T> toObservable(CompletableFuture<T> future) {
        return Observable.create(subscriber ->
                future.whenComplete((result, error) -> {
                    if (error != null) {
                        subscriber.onError(error);
                    } else {
                        subscriber.onNext(result);
                        subscriber.onCompleted();
                    }
                }));
    }

    /**
     * Method return CompletableFuture object from Observable stream
     * @param observable generic stream
     * @param <T> generic type
     * @return CompletableFuture
     */
    static <T> CompletableFuture<List<T>> fromObservable(Observable<T> observable) {
        final CompletableFuture<List<T>> future = new CompletableFuture<>();
        observable
                .doOnError(future::completeExceptionally)
                .toList()
                .forEach(future::complete);
        return future;
    }

    /**
     * Method return single object from observer stream to CompletableFuture
     * @param observable generic stream
     * @param <T> set generic type
     * @return generic type
     */
    static <T> CompletableFuture<T> fromSingleObservable(Observable<T> observable) {
        final CompletableFuture<T> future = new CompletableFuture<>();
        observable
                .doOnError(future::completeExceptionally)
                .single()
                .forEach(future::complete);
        return future;
    }

}
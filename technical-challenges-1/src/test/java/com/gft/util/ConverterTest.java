package com.gft.util;

import org.assertj.core.api.Assertions;
import org.junit.Ignore;
import org.junit.Test;
import rx.Observable;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
@Ignore
public class ConverterTest {

    @Test
    public void shouldConvertCompletableFutureToObserver() {
        CompletableFuture<String> future = CompletableFuture.completedFuture("Abc");

        Observable<String> observable = NodeConverter.toObservable(future);

        Assertions.assertThat(observable.toBlocking().toIterable()).contains("Abc");
    }

    @Test
    public void shouldReturnFailedResultDuringConvertCompletableFutureToObserver() {
        CompletableFuture future = failedFuture(new IllegalStateException("Exception"));

        Observable observable = NodeConverter.toObservable(future);

        assertThatThrownBy(observable.toBlocking().getIterator()::next).isInstanceOf(IllegalStateException.class);
    }

    private static CompletableFuture failedFuture(Exception error) {
        CompletableFuture future = new CompletableFuture();
        future.completeExceptionally(error);
        return future;
    }

    @Test
    public void shouldConvertObservableToFuture() throws ExecutionException, InterruptedException {
        Observable<Integer> observable = Observable.just(1, 2, 3);

        CompletableFuture<List<Integer>> future = NodeConverter.fromObservable(observable);

        Assertions.assertThat(future.get()).contains(1, 2, 3);
    }

    @Test
    public void shouldReturnFailedDuringConvertObservableToFuture() throws ExecutionException, InterruptedException {
        Observable<Integer> observable = Observable.just(1, 2, 3)
                .concatWith(Observable.error(new IllegalStateException("Exception")))
                .onErrorReturn(error -> 0);

        CompletableFuture<List<Integer>> future = NodeConverter.fromObservable(observable);

        Assertions.assertThat(future.get()).contains(0);
    }

    @Test
    public void shouldReturnOneResultDuringConvertObservableToFuture() throws ExecutionException, InterruptedException {
        Observable<Integer> observable = Observable.just(1);

        CompletableFuture<Integer> future = NodeConverter.fromSingleObservable(observable);

        Assertions.assertThat(future.get()).isEqualTo(1);
    }

    @Test(expected = IllegalStateException.class)
    public void shouldReturnExceptionDuringConvertObservableToFuture(){
        Observable<String> observable = Observable.error(new IllegalStateException("Exception"));

        NodeConverter.fromSingleObservable(observable);
    }


}

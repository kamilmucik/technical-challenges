package com.gft.util;

import com.gft.model.Node;
import org.junit.Test;
import rx.Observable;
import rx.Subscription;

import java.nio.file.Paths;
import java.util.Iterator;

import static org.junit.Assert.assertTrue;


public class WatchDirectoryTest {

    @Test
    public void shouldReturnPathAsNode(){
        Node root = FileService.getNodesFromPath(Paths.get("C:\\temp"));
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();

        Observable<Node> observer = Observable.create(s -> {
            while (it.hasNext()) {
                s.onNext(it.next());
            }
            s.onCompleted();
        });

//        Subscription subscriber = observer.subscribe();
        Subscription subscriber = observer.subscribe(
                System.out::println,
                System.out::println,
                () -> System.out.println("finish")
        );

        assertTrue(subscriber.isUnsubscribed());
    }
}

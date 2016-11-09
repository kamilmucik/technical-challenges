package com.gft.util;

import com.gft.model.Node;
import org.junit.Test;
import rx.Observable;
import rx.Subscription;

import java.io.File;
import java.util.Iterator;

import static org.junit.Assert.assertTrue;


public class WatchDirectoryTest {

    @Test
    public void shouldReturnPathAsNode(){
        Node<File> root = new FileService().getTree("C:\\temp");
        TreeConverter tree = new TreeConverter(root);

        Iterator<Node> it = tree.iterator();
        Observable<Node> observer = Observable.create(s -> {
            while (it.hasNext()) {
                s.onNext(it.next());
            }
            s.onCompleted();
        });

        Subscription subscriber = observer
                .subscribe(
                        (p) -> {
                            System.out.println( ((File)p.getPayload()).toPath() );
                        },
                        System.out::println,
                        System.out::println
                );

        assertTrue(subscriber.isUnsubscribed());
    }
}

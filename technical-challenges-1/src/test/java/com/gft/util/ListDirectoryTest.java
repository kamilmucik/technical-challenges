package com.gft.util;

import org.junit.Test;
import rx.Observable;
import rx.observers.TestSubscriber;

import java.io.File;
import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;


public class ListDirectoryTest {

    @Test
    public void shouldReturnFilesStructureAsNode() throws IOException {
        File f = new File("C:\\temp\\Directory1");
        f.mkdirs();
        Observable<File> observable = FileService.convert(new File("C:\\temp"));
        TestSubscriber<File> subscriber = new TestSubscriber<>();

        observable.subscribe(subscriber);
        File resultFile = subscriber.getOnNextEvents().get(0);

        subscriber.assertNoErrors();
        assertThat(resultFile).isEqualTo(f);
    }
}

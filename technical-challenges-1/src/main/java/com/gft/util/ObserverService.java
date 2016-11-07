package com.gft.util;

import rx.Observable;
import rx.subscriptions.Subscriptions;

import java.io.BufferedReader;
import java.io.IOException;
import java.nio.file.DirectoryIteratorException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.stream.Stream;

public class ObserverService {



    static Stream<Path> listFiles(Path path) {
        if (Files.isDirectory(path)) {
            try { return Files.list(path).flatMap(ObserverService::listFiles); }
            catch (Exception e) { return Stream.empty(); }
        } else {
            return Stream.of(path);
        }
    }

    public static Observable<Path> listFolder(Path dir) {
        return Observable.<Path>create(subscriber -> {
            try {
                DirectoryStream<Path> stream = Files.newDirectoryStream(dir, "*");

                subscriber.add(Subscriptions.create(() -> {
                    try {
                        stream.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }));
                Observable.<Path>from(stream).subscribe(subscriber);
            } catch (DirectoryIteratorException ex) {
                subscriber.onError(ex);
            } catch (IOException ioe) {
                subscriber.onError(ioe);
            }
        });
    }




}

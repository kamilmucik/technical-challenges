package com.gft.websocket;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import java.util.concurrent.atomic.AtomicInteger;

@Component
public class CounterService {

    private AtomicInteger counter = new AtomicInteger(0);

    @Autowired
    FileSystemService fileSystemService;

    @Scheduled(fixedDelay = 5000)
    public void sendCounterUpdate() {

//        fileSystemService.pingToAll(counter.incrementAndGet());
    }

}
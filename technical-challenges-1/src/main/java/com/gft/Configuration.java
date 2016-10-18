package com.gft;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

/**
 * Created by kamu on 2016-10-18.
 */
@SpringBootApplication
@EnableWebSocket
public class Configuration {

    private static Logger LOG = LoggerFactory.getLogger(Configuration.class);

    public static void main(String[] args) throws Exception {
        SpringApplication.run(Configuration.class, args);
    }
}

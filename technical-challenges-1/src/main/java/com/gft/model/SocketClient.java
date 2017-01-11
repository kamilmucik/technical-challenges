package com.gft.model;


import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;

import java.io.IOException;
import java.nio.file.Path;

public class SocketClient {

    private Path path;

    private final WebSocketSession session;

    public SocketClient(WebSocketSession session) {
        this.session = session;
    }

    public void sendMessage(String text) throws IOException {
        this.session.sendMessage(new TextMessage(text));
    }

    public WebSocketSession getSession() {
        return session;
    }

    public Path getPath() {
        return path;
    }

    public void setPath(Path path) {
        this.path = path;
    }
}

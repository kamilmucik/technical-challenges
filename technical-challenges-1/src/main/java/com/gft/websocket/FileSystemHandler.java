package com.gft.websocket;

import com.gft.model.SocketClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.CloseStatus;
import org.springframework.web.socket.TextMessage;
import org.springframework.web.socket.WebSocketSession;
import org.springframework.web.socket.handler.TextWebSocketHandler;

import java.nio.file.Paths;

@Component
public class FileSystemHandler extends TextWebSocketHandler {

    @Autowired
    FileSystemService fileSystemService;

    @Override
    public void afterConnectionEstablished(WebSocketSession session) {
        fileSystemService.addClient(new SocketClient(session));
    }

    @Override
    public void afterConnectionClosed(WebSocketSession session, CloseStatus status){
        fileSystemService.closeSession(session);
    }

    @Override
    protected void handleTextMessage(WebSocketSession session, TextMessage message)
            throws Exception {
        String[] receivedMessage = message.getPayload().split(":");
        if (receivedMessage[0].equals("setPath")){
            fileSystemService
                    .getSocketClient(session)
                    .ifPresent( c -> c.setPath(Paths.get(receivedMessage[1])));
        } else if (receivedMessage[0].equals("close")) {
            fileSystemService.closeSession(session);
        }
    }
}

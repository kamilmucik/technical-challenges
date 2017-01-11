package com.gft.websocket;

import com.gft.model.PathDTO;
import com.gft.model.SocketClient;
import com.gft.util.DirectoryWatcher;
import com.google.gson.Gson;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.socket.WebSocketSession;
import rx.Observable;
import rx.Subscriber;

import javax.annotation.PostConstruct;
import javax.annotation.PreDestroy;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.*;

@Service
public class FileSystemService {

    private List<SocketClient> clients = new LinkedList<>();
    private Set<PathDTO> knownPaths = new LinkedHashSet<>();
    private Gson gson;
    private DirectoryWatcher watcher;
    private Observable<Path> observable ;
    private Subscriber<Path> subscriber;

    @Value("${env.path.root.uri}")
    String rootPath;

    /**
     * Should create watcher object
     * Create Subscriber
     */
    @PostConstruct
    public void init() {
        gson = new Gson();
        watcher = new DirectoryWatcher();
        observable = watcher.register(Paths.get(rootPath));
        subscriber = new Subscriber<Path>() {
            @Override
            public void onCompleted() { }
            @Override
            public void onError(Throwable throwable) {}
            @Override
            public void onNext(Path path) {
                knownPaths.add(new PathDTO(path.toString()));
                clients.forEach(c -> {
                    try {
                        c.sendMessage(gson.toJson(new PathDTO(path.toString())));
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                });
            }
        };
        observable.subscribe(subscriber);
    }

    /**
     * Should shutdown all Closeable Object that implement AutoCloseable.
     * Unsubscribe all event
     */
    @PreDestroy
    public void close() {
        subscriber.unsubscribe();
        watcher.closeWatcher();
    }

    void addClient(SocketClient client){
        clients.add(client);
        for (PathDTO p : knownPaths){
            try {
                client.sendMessage(gson.toJson(p));
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    Optional<SocketClient> getSocketClient(WebSocketSession session){
        return clients
                .stream()
                .filter(u -> u.getSession().equals(session))
                .findFirst();
    }

    void closeSession(WebSocketSession session) {
        Optional<SocketClient> clint =  clients
                .stream()
                .filter(u -> u.getSession().equals(session))
                .findFirst();
        if (clint.isPresent()) {
            try {
                clint.get().getSession().close();
                clients.remove(clint.get());
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    public void create(PathDTO pathDTO) {
        Path file = Paths.get(rootPath, pathDTO.getName());
        try {
            if (!pathDTO.getName().contains(".")){
                Files.createDirectory(file);
            } else {
                Files.createFile(file);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}

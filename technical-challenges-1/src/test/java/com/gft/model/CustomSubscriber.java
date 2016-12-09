package com.gft.model;

import java.nio.file.Path;

public final class CustomSubscriber {

    private Integer id;

    private Path path;

    private volatile Boolean isChanged;

    private Thread ownThread;

    public CustomSubscriber(Integer id, Path path){
        this.id = id;
        this.path = path;
        this.isChanged = false;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Boolean getChanged() {
        return isChanged;
    }

    public void setChanged(Boolean changed) {
        isChanged = changed;
    }

    public Path getPath() {
        return path;
    }

    public void setPath(Path path) {
        this.path = path;
    }

    public Thread getOwnThread() {
        return ownThread;
    }

    public void setOwnThread(Thread ownThread) {
        this.ownThread = ownThread;
    }

    @Override
    public String toString(){
        return "CustomSubscriber["+id+"]["+isChanged+"] -> " + path;
    }
}

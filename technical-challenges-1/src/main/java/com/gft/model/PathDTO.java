package com.gft.model;


import java.util.UUID;

public class PathDTO {

    private String id= null;

    private String name = null;

    public PathDTO () {
        this.id = UUID.randomUUID().toString();
    }
    public PathDTO (String name) {
        this.name = name;
        this.id = UUID.randomUUID().toString();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getId() {
        return id;
    }
}

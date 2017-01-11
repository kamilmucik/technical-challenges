package com.gft.controller;

import com.gft.model.PathDTO;
import com.gft.websocket.FileSystemService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@RequestMapping("/path")
public class PathCotroller {

    @Autowired
    FileSystemService fileSystemService;

    @RequestMapping(value = "/add/", method = RequestMethod.POST)
    public ResponseEntity<?> createPath(@RequestBody PathDTO pathDTO) {
        System.out.println("Creating Path : " + pathDTO.getName());
        fileSystemService.create(pathDTO);
        return new ResponseEntity<>(pathDTO, HttpStatus.CREATED);
    }
}

package com.web.backend.board.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login/boards")
public class BoardController {


    @GetMapping
    public ResponseEntity getBoards() {

        return null;
    }

}

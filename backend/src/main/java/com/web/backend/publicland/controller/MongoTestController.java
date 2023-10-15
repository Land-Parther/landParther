package com.web.backend.publicland.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class MongoTestController {

    @GetMapping("/test/{title}")
    public String findById(@PathVariable String title) {
        System.out.println("test");
        return null;
    }
}

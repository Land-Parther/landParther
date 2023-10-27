package com.web.backend.user.controller;

import com.web.backend.user.domain.User;
import com.web.backend.user.dto.JoinRequestDTO;
import com.web.backend.user.dto.LoginRequestDTO;
import com.web.backend.user.repository.UserRepository;
import com.web.backend.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping("/join")
    public Long joinUser(@RequestBody JoinRequestDTO joinRequestDTO) {

        Long userIdx = userService.joinUser(joinRequestDTO);

        return userIdx;
    }

    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody LoginRequestDTO loginRequestDTO) {

        User user = userService.loginUser(loginRequestDTO);

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}

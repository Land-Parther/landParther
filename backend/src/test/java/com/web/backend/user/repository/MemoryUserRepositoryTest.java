package com.web.backend.user.repository;

import static org.junit.jupiter.api.Assertions.*;

import com.web.backend.user.dto.JoinRequestDTO;
import com.web.backend.user.service.UserService;
import com.web.backend.user.service.impl.UserServiceImpl;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class MemoryUserRepositoryTest {

    private final UserRepository repository;
    private final UserService service;

    @Autowired
    public MemoryUserRepositoryTest(UserRepository repository, UserService service) {
        this.repository = repository;
        this.service = service;
    }

    @Test
    void 유저회원가입() {
        JoinRequestDTO joinRequestDTO = new JoinRequestDTO("test", "test", "test");
        service.joinUser(joinRequestDTO);
    }

}
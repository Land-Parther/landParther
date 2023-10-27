package com.web.backend.user.service.impl;

import com.web.backend.user.domain.User;
import com.web.backend.user.dto.JoinRequestDTO;
import com.web.backend.user.dto.LoginRequestDTO;
import com.web.backend.user.repository.UserRepository;
import com.web.backend.user.service.UserService;
import java.util.Optional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

@Service
@Slf4j
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public Long joinUser(JoinRequestDTO join) {

        Optional<User> findUser = userRepository.findByUserId(join.getUserId());

        if (!findUser.isEmpty()) {
            throw new RuntimeException("아이디 중복");
        }

        User joinUser = new User(join);
        Long userIdx = userRepository.joinUser(joinUser);

        return userIdx;
    }

    @Override
    public User loginUser(LoginRequestDTO loginRequestDTO) {

        Optional<User> findUser = userRepository.findByUserId(loginRequestDTO.getUserId());

        if (findUser.isEmpty()) {
            throw new RuntimeException("해당 아이디로 가입하 유저가 없습니다");
        }
        return findUser.get();
    }
}

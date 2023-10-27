package com.web.backend.user.service;

import com.web.backend.user.domain.User;
import com.web.backend.user.dto.JoinRequestDTO;
import com.web.backend.user.dto.LoginRequestDTO;

public interface UserService {

    Long joinUser(JoinRequestDTO joinReqDTO);

    User loginUser(LoginRequestDTO loginRequestDTO);
}

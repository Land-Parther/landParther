package com.web.backend.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class JoinRequestDTO {

    private String userId;
    private String userPwd;
    private String userName;

}

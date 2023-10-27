package com.web.backend.user.domain;

import com.web.backend.user.dto.JoinRequestDTO;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
public class User {

    private Long userIdx;
    private String userId;
    private String userPwd;
    private String userName;
    private Long userArea;
    private String userRole;
    private String createDt;
    private String useYn;

    public User(JoinRequestDTO dto) {

        this.userId = dto.getUserId();
        this.userPwd = dto.getUserPwd();
        this.userName = dto.getUserName();
        this.userArea = 1L;
        this.userRole = "Admin";
        this.createDt = "20231027";
        this.useYn = "Y";

    }

}

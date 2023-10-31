package com.web.backend.board.dto;

import com.web.backend.user.domain.User;
import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@NoArgsConstructor(access= AccessLevel.PROTECTED)
@AllArgsConstructor
public class getBoardResponseDTO {

    private String boardTitle;
    private User boardWrite;
    private String boardContent;
    private String boardType;
    private String boardFile;
    private LocalDateTime updateDt;

}

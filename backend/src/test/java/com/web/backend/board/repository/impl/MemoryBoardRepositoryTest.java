package com.web.backend.board.repository.impl;

import com.web.backend.board.domain.Board;
import com.web.backend.board.repository.BoardRepository;
import com.web.backend.user.domain.User;
import com.web.backend.user.repository.UserRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDateTime;
import java.util.List;

@SpringBootTest
class MemoryBoardRepositoryTest {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;
    private User user;

    @Autowired
    public MemoryBoardRepositoryTest(BoardRepository boardRepository, UserRepository userRepository) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
    }

    @BeforeAll
    public void before() {
        user = new User("test", "test", "test", 1L, "Admin", "20231027", "Y");
        userRepository.joinUser(user);
    }

    @Test
    void 게시판등록테스트() {
        User writeUser = userRepository.findByUserId("test").get();
        Board board = new Board("test", writeUser, "test", "test", "test", LocalDateTime.now(), LocalDateTime.now(), "Y");
        boardRepository.save(board);

        List<Board> all = boardRepository.findAll();

        Assertions.assertThat(all.size()).isEqualTo(1);
        Assertions.assertThat(all.get(0).getBoardTitle()).isEqualTo("test");
    }

}
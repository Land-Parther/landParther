package com.web.backend.board.repository;

import com.web.backend.board.domain.Board;

import java.util.List;

public interface BoardRepository {

    List<Board> findAll();

    Long save(Board board);

}

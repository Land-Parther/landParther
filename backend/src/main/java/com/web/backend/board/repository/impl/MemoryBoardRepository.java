package com.web.backend.board.repository.impl;

import com.web.backend.board.domain.Board;
import com.web.backend.board.repository.BoardRepository;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Repository
public class MemoryBoardRepository implements BoardRepository {

    private static Map<Long, Board> boardRepository = new ConcurrentHashMap<>();
    private static Long boardIdx = 1L;

    @Override
    public List<Board> findAll() {

        ArrayList<Board> boards = new ArrayList<>(boardRepository.values());

        return boards;
    }

    @Override
    public Long save(Board board) {
        boardRepository.put(boardIdx, board);
        boardIdx++;
        return boardIdx - 1;
    }
}

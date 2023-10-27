package com.web.backend.user.repository;

import com.web.backend.user.domain.User;
import java.util.Map;
import java.util.Optional;
import java.util.concurrent.ConcurrentHashMap;
import org.springframework.stereotype.Repository;

@Repository
public class MemoryUserRepository implements UserRepository {

    private static Map<Long, User> repository = new ConcurrentHashMap<>();
    private static Long userIdx = 1L;

    @Override
    public Long joinUser(User user) {

        repository.put(userIdx, user);
        userIdx++;
        return userIdx-1;
    }

    @Override
    public Optional<User> findByUserId(String userId) {
        Optional<User> first = repository.values().stream()
                .filter(u -> u.getUserId().equals(userId))
                .findFirst();
        return first;
    }

}

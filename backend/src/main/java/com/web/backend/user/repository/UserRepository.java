package com.web.backend.user.repository;

import com.web.backend.user.domain.User;
import java.util.Optional;

public interface UserRepository {

    Long joinUser(User user);

    Optional<User> findByUserId(String userId);


}

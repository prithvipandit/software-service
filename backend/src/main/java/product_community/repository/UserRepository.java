package product_community.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import product_community.entity.User;

public interface UserRepository extends JpaRepository<User, String> {}

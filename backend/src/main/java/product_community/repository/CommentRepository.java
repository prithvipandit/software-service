package product_community.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import product_community.entity.Comment;

public interface CommentRepository extends JpaRepository<Comment, String> {}

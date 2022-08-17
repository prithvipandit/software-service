package product_community.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import product_community.entity.Reply;

public interface ReplyRepository extends JpaRepository<Reply, String> {}
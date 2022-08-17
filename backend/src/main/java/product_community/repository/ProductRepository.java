package product_community.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import product_community.entity.Product;

public interface ProductRepository extends JpaRepository<Product, String> {}
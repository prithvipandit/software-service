package product_community.controller;



import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import product_community.entity.Product;
import product_community.repository.ProductRepository;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class ProductController {

  @Autowired
  ProductRepository repo;
  
  
	@GetMapping(path="/product",produces={"application/json"})
    public List<Product> getAllProducts() {
		return repo.findAll();
	}
	
	@GetMapping(path="/product/{productID}",produces={"application/json"})
	public Optional<Product> getProduct(@PathVariable("user_email") String productID) {
		return repo.findById(productID);
	}
	
	@PostMapping(path="/product",produces= {"application/json"})
	@ResponseBody
	public Product addUser(@RequestBody Product product) {
		System.out.println(product.getProductID());
		repo.save(product);
		return product;
	}
	
	@DeleteMapping("/product/{productID}")
	public String deleteBook(@PathVariable String productID) {
		
		Product product=repo.getOne(productID);
		repo.delete(product);
		return "deleted";
	}
}

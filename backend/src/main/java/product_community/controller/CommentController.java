package product_community.controller;

import java.util.ArrayList;
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

import product_community.entity.Comment;
import product_community.repository.CommentRepository;

@CrossOrigin(origins="http://localhost:4200/")
@RestController
public class CommentController {

  @Autowired
  CommentRepository repo;
  
  
	@GetMapping(path="/comment",produces={"application/json"})
    public List<Comment> getAllComments() {
		return repo.findAll();
	}
	
	@GetMapping(path="/comment/{commentID}",produces={"application/json"})
	public Optional<Comment> getComment(@PathVariable("commentID") String commentID) {
		return repo.findById(commentID);
	}
	
	@PostMapping(path="/comment",produces= {"application/json"})
	@ResponseBody
	public Comment addComment(@RequestBody Comment comment) {
		System.out.println(comment.getCommentID());
		repo.save(comment);
		return comment;
	}
	@PutMapping(path="/comment",produces={"application/json"})
	@ResponseBody
	public Comment updateBook(@RequestBody Comment comment) {
		
		repo.save(comment);
		
		return comment;
	}
	
	@DeleteMapping("/comment/{commentID}")
	public String deleteComment(@PathVariable String commentID) {
		
		Comment comment=repo.getOne(commentID);
		repo.delete(comment);
		return "deleted";
	}
	@CrossOrigin(origins="http://localhost:4200/")
	@PostMapping(path="/comment/search/{searchSub}",produces= {"application/json"})
	@ResponseBody
	public List<Comment> fetchComments(@PathVariable String searchSub) {
		List<Comment> commentList = null;
		commentList = repo.findAll();
		
		if(searchSub.equals("*"))return commentList;
		
		List<Comment> desiredList = new ArrayList<Comment>();
		
		for(Comment comment : commentList){
			String description = comment.getDescription();
			String subject = comment.getSubject();
			String prodCode = comment.getProductID();
			String userEmail = comment.getUser_email();
			String date = comment.getDateTime().split(",")[0];
			
			
			
			if(description.contains(searchSub) || subject.contains(searchSub)) {
				desiredList.add(comment);
			}
			if(userEmail.equals(searchSub)) {desiredList.add(comment);}
			if(prodCode.equals(searchSub)) {desiredList.add(comment);}
			if(date.replaceAll("/"," ").contains(searchSub)){desiredList.add(comment);}
			
		}
		
	
		
		return desiredList;
	}
}

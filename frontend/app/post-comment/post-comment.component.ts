import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentService } from '../services/comment.service';
import { Comment } from '../model/comment';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';
import { UserService } from '../services/user.service';
import {formatDate } from '@angular/common';



@Component({
  selector: 'app-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.css']
})
export class PostCommentComponent implements OnInit {

  comments !: Comment[];
  products !: Product[];

  msgs="";
  resultForm = new FormGroup({
    subject: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required]),
    company: new FormControl("", [Validators.required])
  });

  today= new Date();
  jstoday = '';

  constructor(private router:Router,private userService: UserService ,private commentService : CommentService,private productService : ProductService) {
    
   }

  ngOnInit(): void {
    this.commentService.getComment().subscribe((data:Comment[])=>{
      this.comments=data;
    });
    this.productService.getProducts().subscribe((data:Product[])=>{
      this.products=data;
    });
  }

  onSubmit(){
    console.log(this.resultForm.value);
    const cID = "C"+(this.comments.length+1);
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy,hh:mm:ss a', 'en-US', '+0530');

    const comment : Comment ={
      commentID: cID,
      subject: this.resultForm.value.subject,
      productID: this.resultForm.value.company,
      likes: 0,
      views: 0,
      user_email: this.userService.currentUser.user_email,
      replyID: '',
      description: this.resultForm.value.description,
      dateTime: this.jstoday
    }
    
    this.commentService.addComment(comment).subscribe((data)=>{
      
    });

    this.msgs="Comment Added Successfully";
    setTimeout(()=>{
      this.router.navigateByUrl("/user-profile");
    },2000)
  }
 

}

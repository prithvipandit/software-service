import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { CommentService } from '../services/comment.service';

import { Comment } from '../model/comment';


@Component({
  selector: 'app-search-articles',
  templateUrl: './search-articles.component.html',
  styleUrls: ['./search-articles.component.css']
})
export class SearchArticlesComponent implements OnInit {

  comments!:Comment[];
  isLiked:boolean=false;

  constructor(private router : Router,private commentService:CommentService) { }

  resultForm = new FormGroup({
    serachComments: new FormControl("", [Validators.required])
    
  });

  ngOnInit(): void {
      this.comments=this.commentService.searchedComments;

  }

  updateCurrent(comment:Comment){
    this.commentService.currentComment=comment;
    this.router.navigateByUrl('/show-comment');
  }
  updateLikes(comment:Comment){
    if(this.isLiked)comment.likes+=1;
    else comment.likes-=1;

  }
  navigateToAdd(){
    this.router.navigateByUrl('/post-comment');
  }
  onSubmit(){
   this.commentService.searchedComments = [];
    this.commentService.searchComment(this.resultForm.value.serachComments).
    subscribe((data:Comment[])=>{
       data.forEach((commentData)=>this.commentService.searchedComments.push(commentData));
    });
    this.comments=this.commentService.searchedComments;
  }

}

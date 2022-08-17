import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms"
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';
import { Comment } from '../model/comment';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent implements OnInit {

  resultForm = new FormGroup({
    searchPostsText: new FormControl("", [Validators.required])
  });
  name !:string;

  constructor(private router: Router,private userService : UserService,private commentService:CommentService) { }

  ngOnInit(): void {
    this.name = this.userService.currentUser.first_name+" "+this.userService.currentUser.last_name;
  }

  onSubmit(){
    this.commentService.searchedComments = [];
    this.commentService.searchComment(this.resultForm.value.searchPostsText).
    subscribe((data:Comment[])=>{
       data.forEach((commentData)=>this.commentService.searchedComments.push(commentData));
    });
    this.router.navigateByUrl("/search");
  }
  nvigateToUser(){
    this.router.navigateByUrl("/user-profile");
  }

}

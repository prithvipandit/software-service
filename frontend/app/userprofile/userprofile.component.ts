import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Comment } from '../model/comment';
import { User } from '../model/user';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {

  userComments!:Comment[];
  name!:string;

  msg = "";
  email="";

  resultForm = new FormGroup({
    pass: new FormControl("", [Validators.required]),
    conpass: new FormControl("", [Validators.required]),
    
  });

  constructor(private router : Router,private commentService : CommentService,private userService : UserService) { }

  ngOnInit(): void {
    this.email = this.userService.currentUser.user_email;
    this.name = this.userService.currentUser.first_name+" "+this.userService.currentUser.last_name;
    this.commentService.searchedComments = [];
    this.commentService.searchComment(this.userService.currentUser.user_email).
    subscribe((data:Comment[])=>{
       data.forEach((commentData)=>this.commentService.searchedComments.push(commentData));
    });
    this.userComments=this.commentService.searchedComments;
  }

  updateCurrent(comment:Comment){
    this.commentService.currentComment=comment;
    this.router.navigateByUrl('/show-comment');
  }
  delComment(comment:Comment){
    this.commentService.delComment(comment.commentID).subscribe((data)=>{});
    this.commentService.searchedComments = [];
    this.commentService.searchComment(this.userService.currentUser.user_email).
    subscribe((data:Comment[])=>{
       data.forEach((commentData)=>this.commentService.searchedComments.push(commentData));
    });
    this.userComments=this.commentService.searchedComments;
  }

  onSubmit(){
    if(this.resultForm.value.pass==this.resultForm.value.conpass){
      const user : User ={
        first_name: this.userService.currentUser.first_name,
        last_name: this.userService.currentUser.last_name,
        user_email: this.userService.currentUser.user_email,
        password: this.resultForm.value.pass,
        userImage: this.userService.currentUser.userImage
      }
      this.userService.editUser(user).subscribe((data)=>{});
    }
    else{
      this.msg="Password Doesn't match";
    }
  };

  navigate(){
    this.router.navigateByUrl('/post-comment');
  }
  navig(){
    this.router.navigateByUrl('/');
  }


}

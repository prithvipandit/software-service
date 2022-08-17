import { Component, OnInit } from '@angular/core';
import { Comment } from '../model/comment';
import { User } from '../model/user';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  usersNo=0;
  postNo =0;

  constructor(private userService : UserService,private commentService : CommentService) { }

  ngOnInit(): void {
   this.userService.getUsers().subscribe((data:User[])=>{
       this.usersNo=data.length;
       
    });
    this.commentService.getComment().subscribe((data:Comment[])=>{
      this.postNo = data.length;
      
    });

  }

}

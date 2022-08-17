import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommentService } from '../services/comment.service';
import { ReplyService } from '../services/reply.service';
import { Comment } from '../model/comment';
import { Reply } from '../model/reply';

@Component({
  selector: 'app-show-comment',
  templateUrl: './show-comment.component.html',
  styleUrls: ['./show-comment.component.css']
})
export class ShowCommentComponent implements OnInit {

  comment !: Comment;
  replyies !: Reply[];
  reply !: Reply[];

  constructor(private router : Router,private commentService : CommentService,private replyService : ReplyService) { }

  ngOnInit(): void {
    this.comment= this.commentService.currentComment;
    this.replyService.getAllReply().subscribe((data:Reply[])=>{
      
      this.replyies=data;
      this.reply = this.replyies.filter((o)=>o.commentID==this.comment.commentID);
    });
  }

  navigate(){
    this.router.navigateByUrl('/post-reply');
  }

}

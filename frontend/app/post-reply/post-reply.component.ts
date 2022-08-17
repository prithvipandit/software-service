import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { ReplyService } from '../services/reply.service';
import { Reply } from '../model/reply';
import { CommentService } from '../services/comment.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post-reply',
  templateUrl: './post-reply.component.html',
  styleUrls: ['./post-reply.component.css']
})
export class PostReplyComponent implements OnInit {

  constructor(private router : Router,private replyService : ReplyService,private commentService : CommentService,
    private userServices : UserService) { }
  msgs="";
  resultForm = new FormGroup({
    subject: new FormControl("", [Validators.required]),
    description: new FormControl("", [Validators.required])
  });

  replys! : Reply[];

  replyID!:string;

  ngOnInit(): void {
    this.replyService.getAllReply().subscribe((data:Reply[])=>{
      this.replys=data;
      this.replyID = "R"+(data.length+1);
    });
    
    
  }

  onSubmit(){
    const reply : Reply = {
      replyID: this.replyID,
      commentID: this.commentService.currentComment.commentID,
      replySection: this.resultForm.value.description,
      user_email: this.userServices.currentUser.user_email,
      replySubject: this.resultForm.value.subject
    };

    this.replyService.addReply(reply).subscribe((data)=>{
    //  console.log(data);
    })
    

    this.msgs = "Reply Added Successfully"

    setTimeout(()=>{
      this.router.navigateByUrl("/show-comment");
    },2000)


    
  }

}

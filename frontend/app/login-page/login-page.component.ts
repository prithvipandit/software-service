import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  msg="";
  valid_add=true;
  already:any;
  resultForm = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
 
  });

  user !:User;

  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(){

    
    this.userService.getUser("/"+this.resultForm.value.email)
      .subscribe((data:User) => {
        this.user=data;
    }) 

    if(this.user==null){
      this.msg = "";
    }else{
      if(this.user.password!=this.resultForm.value.password){
        this.msg = "Invalid Email/Invalid Password";
      }else{
        this.userService.currentUser=this.user;
        this.router.navigateByUrl("/home");
      }
    }
  }

  toRegister(){
    this.router.navigateByUrl("/register");
  }

}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { User } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.component.html',
  styleUrls: ['./registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  msg="";
  valid_add=true;
  already:any;
  resultForm = new FormGroup({
    first_name: new FormControl("", [Validators.required]),
    last_name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required]),
    con_password: new FormControl("", [Validators.required])
  });

  users!: User[];


  constructor(private userService: UserService,private router : Router) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data:User[])=>{
      this.users=data;
    });
  }

  onSubmit(){
    
    const user : User={
      first_name : this.resultForm.value.first_name,
      last_name : this.resultForm.value.last_name,
      user_email : this.resultForm.value.email,
      password : this.resultForm.value.password,
      userImage : "avtar1",
    }
    const user1 : User={
      first_name : "Piyush",
      last_name :  "Kumar",
      user_email : "itpiyush@csjmu.ac.in",
      password : "password",
      userImage : "avtar1",
    }
    this.userService.addUser(user)
      .subscribe(data => {
     //  console.log(data)
    })  

    this.msg="Account Added Successfully,Please Login";
    setTimeout(()=>{
      this.router.navigateByUrl('/login');
    },2000)
    

  
  }

  toLogin(){
    this.router.navigateByUrl('/login');
  }

}

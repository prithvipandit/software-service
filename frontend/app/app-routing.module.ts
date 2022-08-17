import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { PostReplyComponent } from './post-reply/post-reply.component';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { SearchArticlesComponent } from './search-articles/search-articles.component';
import { ShowCommentComponent } from './show-comment/show-comment.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
   {path:'',component:HomepageComponent,pathMatch: 'full'},
   {path:'register',component:RegisterpageComponent},
   {path:'login',component:LoginPageComponent},
   {path:'home',component:UserHomePageComponent},
   {path:'search',component:SearchArticlesComponent},
   {path:'show-comment',component:ShowCommentComponent},
   {path:'post-comment',component:PostCommentComponent},
   {path:'post-reply',component:PostReplyComponent},
   {path:'user-profile',component:UserprofileComponent},
   {path:':user_email',component:EditUserDetailsComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

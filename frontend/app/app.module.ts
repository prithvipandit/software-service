import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterpageComponent } from './registerpage/registerpage.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { SearchArticlesComponent } from './search-articles/search-articles.component';
import { ShowCommentComponent } from './show-comment/show-comment.component';
import { PostCommentComponent } from './post-comment/post-comment.component';
import { PostReplyComponent } from './post-reply/post-reply.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    RegisterpageComponent,
    LoginPageComponent,
    UserHomePageComponent,
    EditUserDetailsComponent,
    SearchArticlesComponent,
    ShowCommentComponent,
    PostCommentComponent,
    PostReplyComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

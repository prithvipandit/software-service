import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Comment } from '../model/comment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseURL = "http://localhost:7071/comment";

  currentComment:Comment={
    commentID: "C1",
    subject: "Review of Nike Jordan Shoe",
    productID: "P1",
    likes: 0,
    views: 0,
    user_email: "user@gmail.com",
    replyID: "R1,",
    description: "Nice Comfortable Shoes must buy, also there are limited stocks which seems to have a great deal under this price range",
    dateTime: "2022/06/01,10:20 AM"
};

  searchedComments:Comment[]=[];


  constructor(private http: HttpClient) { }

  getComment(): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.baseURL}`);
  }

  addComment(comment:Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseURL}`,comment);
  }

  delComment(commentID:string):Observable<Object>{
    return this.http.delete(`${this.baseURL+"/"+commentID}`);
  }

  updateComment(comment:Comment):Observable<Comment>{
    return this.http.put<Comment>(`${this.baseURL}`,comment);
  }

  searchComment(searchStr:string): Observable<Comment[]> {
    return this.http.post<Comment[]>(`${this.baseURL+"/search/"+searchStr}`,"");
  }

  getSearchComments(){
    return this.searchedComments;
  }


  updateCurrentComment(){}

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reply } from '../model/reply';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  private baseURL = "http://localhost:7071/reply";

  constructor(private http : HttpClient){}

  getAllReply(): Observable<Reply[]>{
    return this.http.get<Reply[]>(`${this.baseURL}`);
  }
  

  addReply(reply:Reply): Observable<Reply> {
    return this.http.post<Reply>(`${this.baseURL}`,reply);
  }

  delComment(replyID:string):Observable<Object>{
    return this.http.delete(`${this.baseURL+"/"+replyID}`);
  }
  
  updateReply(reply:Reply):Observable<Reply>{
    return this.http.put<Reply>(`${this.baseURL}`,reply);
  }
  
}

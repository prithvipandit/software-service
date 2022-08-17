import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: User={
    first_name: 'Piyush',
    last_name: 'Kumar',
    user_email: 'itpiyush@csjmu.ac.in',
    password: 'password',
    userImage: 'avtar1'
  };

  private baseURL = "http://localhost:7071/user";

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseURL}`);
  }

  addUser(user:User): Observable<Object> {
    return this.http.post(`${this.baseURL}` ,user);
  }
  editUser(user:User): Observable<Object> {
    return this.http.put(`${this.baseURL}` ,user);
  }

  getUser(email:string):Observable<User>{
    return this.http.get<User>(`${this.baseURL+email}`);
  }
}

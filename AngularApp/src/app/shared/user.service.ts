import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/toPromise';

import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  selectedUser: User;
  users: User[];
  private baseURL = 'http://localhost:3000/api/getUsers';

  constructor(private http: HttpClient) { }
  

  postUser(user: User){
  	return this.http.post(this.baseURL, user);
  }
  getUsers(username: any){
    return this.http.get<any[]>(this.baseURL).pipe(
        map(users => {
            const newUsers = [];
            for(let user of users){
                const uName = user.username;
                newUsers.push({ username: uName });
            }
           
            return newUsers;
        }),
        tap(users => console.log(users))
        );
      }
  getUserByUsername(uName: string){
    return this.http.get<any[]>(`${this.baseURL}/${uName}`);
  }
  
  
}

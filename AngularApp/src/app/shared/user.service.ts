import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, tap } from 'rxjs/operators';
import { AuthenticationService } from '../authentication.service';
import 'rxjs/add/operator/toPromise';
import { LoginModel } from '../login/login.model'
import { User } from './user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  selectedUser: User;
  users: User[];
  private baseURL = 'http://localhost:3000'
  private usersURL = 'http://localhost:3000/api/getUsers';
  private apiURL = 'http://localhost:3000/api/users'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data', 'Access-Control-Allow-Origin': '*'})
  };

  constructor(private http: HttpClient, private auth: AuthenticationService) {
  
  }

  postUser(user: User){
  	return this.http.post(this.usersURL, user);
  }
  getUsers(username: any){
    return this.http.get<any[]>(this.usersURL).pipe(
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

  updateUser(user: User){
    this.auth.profile().subscribe(user => {
      return this.http.put(`${this.apiURL}/${user._id}`, user) 
    })
  }

  getUserByUsername(uName: string){
    return this.http.get<any[]>(`${this.usersURL}/${uName}`);
  }

  getUserById(uId: number){
    return this.http.get<User>(`${this.apiURL}/getUserById/${uId}`)
  }
}

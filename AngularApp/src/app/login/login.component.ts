
import { Component, OnInit, Renderer2 } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from '../shared/user.model';
import { Observable } from 'rxjs/Observable';

declare var M: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private currentUserSubject: BehaviorSubject<User>;
  currentUser: Observable<User>

  credentials: TokenPayload = {
    username: '',
    password: ''
  };
  
  constructor(
    private auth: AuthenticationService, 
    private router: Router, 
    ) { 
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(sessionStorage.getItem('currentUser')))
      this.currentUser = this.currentUserSubject.asObservable();
    }
 
  ngOnInit(){
  
  }
  errorMessage: string = '';

  login(){
    this.auth.login(this.credentials).subscribe((user) => {
        sessionStorage.setItem('currentUser', JSON.stringify(user["user"]));
        console.log(JSON.stringify(user))
        console.log(this.currentUserSubject.value)

        this.currentUserSubject.next(user)
        this.router.navigateByUrl('/profile');//redirect to profile
        //once user authenticated 
    }, (err) => {
    
        console.error(err);//else print err message
        this.errorMessage = 'Invalid Credentials, Try again!';
    });
  }


}

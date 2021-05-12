
import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
declare var M: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: TokenPayload = {
    username: '',
    password: ''
  };
  
  constructor(private auth: AuthenticationService, private router: Router, private renderer: Renderer2) { }
  ngOnInit(){
  
  }
  errorMessage: string = '';

  login(){
    this.auth.login(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/profile');//redirect to profile
        //once user authenticated 
    }, (err) => {
    
        console.error(err);//else print err message
        this.errorMessage = 'Invalid Credentials, Try again!';
    });
  }


}

import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthenticationService, TokenPayload } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { UserService} from '../shared/user.service';
import { uniqueUsernameValidator } from '../shared/unique-username-validator.directive';
import { ConfirmEqualValidatorDirective } from '../shared/confirm-equal-validator.directive';
import { compareValidator } from '../shared/confirm-equal-validator.directive';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
  
  constructor(private auth: AuthenticationService, private router: Router, private fb: FormBuilder, private userService: UserService) { }
  
  ngOnInit(){
      this.createForm();
  }
  createForm(){
    this.registerForm = this.fb.group({
    username: ['', //this format must stay for uniqueness to work
        null,
     uniqueUsernameValidator(this.userService)
        
     ],
    fullName: ['',
        Validators.required,
            ],
    emailAddress: ['',
        [Validators.required,
        Validators.email]
    ],
    age: ['',
        Validators.required],
    password: ['',
        Validators.required
    ],
    confirmPassword : ['',[
        Validators.required, 
        compareValidator('password')]]
 
  });
  }
  
  get email(){
    return this.registerForm.get('emailAddress');
  }
  get username(){
    return this.registerForm.get('username');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get age(){
    return this.registerForm.get('age');
  }
  get confirmPassword(){
    return this.registerForm.get('confirmPassword');
  }
  get fullName(){
      return this.registerForm.get('fullName');
  }
  
    
  credentials: TokenPayload = {//filling out an empty tokenpayload by default
    username: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    emailAddress: '',
    age: ''
    }
  onSubmit(){
   

   this.credentials = {
    username: this.registerForm.value.username,
    password: this.registerForm.value.password,
    confirmPassword: this.registerForm.value.confirmPassword,
    fullName: this.registerForm.value.fullName,
    emailAddress: this.registerForm.value.emailAddress,
    age: this.registerForm.value.age
   }; this.auth.register(this.credentials).subscribe(() => {
        this.router.navigateByUrl('/profile');//redirect to profile page once 
        //registered
        }, (err) => {
        console.error(err);
       });
    
  }

  }



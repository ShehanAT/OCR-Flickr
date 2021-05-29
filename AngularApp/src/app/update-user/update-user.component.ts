import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service'
import { User } from '../shared/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { uniqueUsernameUpdateValidator } from '../shared/unique-username-update-validator.directive';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  selectedUser: User; 
  updateUserForm: FormGroup;
  isLoading = false;
  formReady:boolean = false;
  component = this;
  formErrors = {
    'username': '',
    'emailAddress': '',
    'fullName': '',
    'age': ''
  };
  validationMessages = {
    'username': {
      'required':      'Username is required.',
      'minlength':     'Name must be at least 4 characters long.',
      'maxlength':     'Name cannot be more than 24 characters long.',
      'forbiddenName': 'Someone named "Bob" cannot be a hero.',
      'uniqueUsernameUpdate': 'That username is already taken! Please pick a different username'
    },
    'emailAddress': {
      'required': 'Email is required!',
      'email': 'Email is not valid!',
    },
    'fullName': {
      'required': 'fullName is required!'
    },
    'age': {
      'required': 'age is required!'
    }
  };

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService, 
    private formBuilder: FormBuilder, 
    private router: Router,
    private cdRef:ChangeDetectorRef
    ) {
     
    }

  setupForm(){
    this.updateUserForm = this.formBuilder.group({
      _id: new FormControl(this.selectedUser._id),
      username: new FormControl(this.selectedUser.username, [
        Validators.required,
        // uniqueUsernameValidator(this.userService)
      ],
      [uniqueUsernameUpdateValidator(this.userService)]
      ),
      emailAddress: new FormControl(this.selectedUser.emailAddress, [
        Validators.required,
        Validators.email
      ]),
      fullName: new FormControl(this.selectedUser.fullName, [
        Validators.required
      ]),
      age: new FormControl(this.selectedUser.age, [
        Validators.required
      ])
    });  
    this.updateUserForm.valueChanges
      .subscribe(data => this.onValueChanged(data));

  }
  get username() { return this.updateUserForm.get('username'); }
  get emailAddress() { return this.updateUserForm.get('emailAddress'); }

  ngOnInit(){
    try{
      this.setupForm()
      this.formReady = true;
    }catch(err){
      console.log(err);
    }
  }

  onSubmit(){
    this.isLoading = true;
    this.userService.updateUser(this.updateUserForm.value).subscribe(user => {
      this.isLoading = false; 
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      window.location.reload();
    }, 
      error => {
        this.isLoading = false;
      });
  }

  onValueChanged(data?: any) {
    if (!this.updateUserForm) { return; }
    const form = this.updateUserForm;
    for (const field in this.formErrors) {
      // clear previous error message (if any)
      this.formErrors[field] = '';
      const control = form.get(field);
      // console.log(control)
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          if(field == "username"){
            console.log(control);
          }
          // if(this.username.invalid && key != 'required'){
          //   // console.log(messages['uniqueUsernameUpdate']);
          //   console.log(field);
          //   this.formErrors[field] += messages['uniqueUsernameUpdate'];
          // }else{
            this.formErrors[field] += messages[key] + ' ';
          // }
          // console.log("field " + field);
          // console.log("key " + key)
          
        }
      }
    }
  }

}

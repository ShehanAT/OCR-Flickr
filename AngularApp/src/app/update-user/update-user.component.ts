import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service'
import { User } from '../shared/user.model';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

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
      'forbiddenName': 'Someone named "Bob" cannot be a hero.'
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
    // this.formBuilder.group({
      // _id: [this.selectedUser._id],
      // username: [this.selectedUser.username, Validators.required],
      // emailAddress: [this.selectedUser.emailAddress, [Validators.required, Validators.email]],
      // fullName: [this.selectedUser.fullName, Validators.required],
      // age: [this.selectedUser.age, Validators.required]
      _id: new FormControl(this.selectedUser._id),
      username: new FormControl(this.selectedUser.username, [
        Validators.required
      ]),
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
    this.userService.updateUser(this.updateUserForm.value).subscribe(x => {
      this.isLoading = false; 
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

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

}

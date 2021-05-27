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

  constructor(
    private route: ActivatedRoute, 
    private userService: UserService, 
    private formBuilder: FormBuilder, 
    private router: Router,
    private cdRef:ChangeDetectorRef
    ) {
      const userId = JSON.parse(sessionStorage.getItem('currentUser'))["user"]["_id"]
      this.userService.getUserById(userId).subscribe(x => {
        this.selectedUser = x[0]['user']
        this.setupForm(); 
        
      });
    }

  setupForm(){
    this.updateUserForm = this.formBuilder.group({
      // _id: [this.selectedUser._id],
      // username: [this.selectedUser.username, Validators.required],
      // emailAddress: [this.selectedUser.emailAddress, [Validators.required, Validators.email]],
      // fullName: [this.selectedUser.fullName, Validators.required],
      // age: [this.selectedUser.age, Validators.required]
      _id: new FormControl(),
      username: new FormControl(),
      emailAddress: new FormControl(),
      fullName: new FormControl(),
      age: new FormControl()
    });  

  }

  ngOnInit(){
    this.formReady = true;
    // try{
      // const userId = JSON.parse(sessionStorage.getItem('currentUser'))["user"]["_id"]
      // this.userService.getUserById(userId).subscribe(x => {
      //   this.selectedUser = x[0]['user']
      //   this.setupForm(); 
      // });
      
    // }
    // catch(err){
    //   console.log(err);
    // }
  }

  onSubmit(){
    this.setupForm();
    if(this.updateUserForm.invalid || this.isLoading){
      // this.updateUserForm.setErrors({ ...this.updateUserForm.errors, 'emailAddressInvalid': true });
      // this.cdRef.detectChanges();
      return ;
    }
    this.isLoading = true;
    this.userService.updateUser(this.updateUserForm.value).subscribe(x => {
      this.isLoading = false; 
      window.location.reload();
    }, 
      error => {
        this.isLoading = false;
      });
  }
}

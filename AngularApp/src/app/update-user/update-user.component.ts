import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service'
import { User } from '../shared/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  selectedUser: User;
  updateUserForm: FormGroup;
  isLoading = false;
  close: EventEmitter<void> = new EventEmitter<void>();
  constructor(
    private route: ActivatedRoute, 
    private userService: UserService, 
    private formBuilder: FormBuilder, 
    private router: Router,
    private bsModalRef: BsModalRef) { }

  ngOnInit() {
    try{
      const userId = JSON.parse(sessionStorage.getItem('currentUser'))["user"]["_id"]
      this.userService.getUserById(userId).subscribe(x => {
        this.selectedUser = x[0]['user']
      });
    }
    catch(err){
      console.log(err);
    }
  }

  onModalClose(): void {
    this.bsModalRef.hide();
    // this.close.emit();
  }

  onSubmit(){
    this.updateUserForm = this.formBuilder.group({
      _id: [this.selectedUser._id],
      username: [this.selectedUser.username, Validators.required],
      emailAddress: [this.selectedUser.emailAddress, Validators.required],
      fullName: [this.selectedUser.fullName, Validators.required],
      age: [this.selectedUser.age, Validators.required]
    });
    if(this.updateUserForm.invalid || this.isLoading){
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

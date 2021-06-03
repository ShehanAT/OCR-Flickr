import { Component, OnInit } from '@angular/core';
import { User } from '../shared/user.model';
import { UserService } from '../shared/user.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CompareValidatorDirective } from '../shared/compare-validator.directive';
import { compareValidator } from '../shared/confirm-equal-validator.directive';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  selectedUser: User;
  changePasswordForm: FormGroup;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder 
  ) { }

  ngOnInit() {
    this.setupForm();
  }

  setupForm(){
    console.log('passing');
    this.changePasswordForm = this.formBuilder.group({
      currentPassword: new FormControl('', [
        Validators.required
      ]),
      newPassword: new FormControl('', [
        Validators.required
      ]),
      confirmPassword: new FormControl('', [
        Validators.required,
        compareValidator('newPassword')
      ]),
    });
  }
  get currentPassword() { return this.changePasswordForm.get("currentPassword"); }
  get newPassword() { return this.changePasswordForm.get('newPassword'); }
  get confirmPassword() { return this.changePasswordForm.get('confirmPassword'); }
  onSubmit(){
    this.userService.changePassword(this.selectedUser, this.newPassword.value).subscribe(user => {
      sessionStorage.setItem('currentUser', JSON.stringify(user));
      window.location.reload();
    },(error) => {
      console.log(error);
    }
    );
  }

}

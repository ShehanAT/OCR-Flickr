import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../shared/user.service'
import { User } from '../shared/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  selectedUser: User;
  updateForm: FormGroup;
  isLoading = false;

  constructor(private route: ActivatedRoute, private userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    console.log(this.route.snapshot)
    const userId = this.route.snapshot.params['id'];
    this.setForm(userId)
  }

  onSubmit(){
    if(this.updateForm.invalid || this.isLoading){
      return ;
    }
    this.isLoading = true;
    this.userService.updateUser(this.updateForm.value).subscribe(x => {
      this.isLoading = false; 
      this.router.navigateByUrl("profile")
    }, 
      error => {
        this.isLoading = false;
      });
  }

  get editFormData() { return this.updateForm.controls; }

  private setForm(userId: number){
    this.userService.getUserById(userId).subscribe(x => {
      this.selectedUser = x 
      this.updateForm = this.formBuilder.group({
        id: [this.selectedUser._id],
        username: [this.selectedUser.username, Validators.required],
        email: [this.selectedUser.emailAddress, Validators.required],
        fullName: [this.selectedUser.fullName, Validators.required],
        age: [this.selectedUser.age, Validators.required]
      });
    });
  }

}

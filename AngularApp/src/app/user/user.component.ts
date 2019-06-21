import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';

declare var M: any;
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  	this.resetForm();

  }

  resetForm(form?: NgForm){
  	if(form){
  		form.reset();
  	}
  	this.userService.selectedUser = {
  		_id: "",
  		username: "",
  		fullName: "",
  		age: 0,
  		emailAddress: "",
  		password: ""
  	}
  }

  onSubmit(form: NgForm){
  	this.userService.postUser(form.value).subscribe((res) => {
  		this.resetForm(form);
  		M.toast({ html: 'Saved successfully', classes: 'rounded'});
  	});
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
//can import both classes and interfaces in the same import statement
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from '../shared/user.model'
import { UpdateUserComponent } from '../update-user/update-user.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;//saving user details interface object in variable
  
  constructor(
    private auth: AuthenticationService, 
    private modalService: NgbModal,
  ) { 
  }

  closeModal(){
    this.modalService.dismissAll();
    this.ngOnInit()
  }
  ngAfterViewInit(){
    document.onclick = (args: any) : void => {
      if(args.target.tagName == "NGB-MODAL-BACKDROP"){
        this.closeModal();
      }
      if(args.target.id == "update-user-modal-close"){
        this.closeModal();
      }
    }
  }

  updateUser(user: User){
    const ref = this.modalService.open(UpdateUserComponent, { centered: true, windowClass : "update-user-modal"});
    ref.componentInstance.selectedUser = user;

  }

  changePassword(user: User){
    const ref = this.modalService.open(ChangePasswordComponent, { centered: true, windowClass: "change-password-modal"});
    ref.componentInstance.selectedUser = user;

  }

  ngOnInit() {//on start get the details of the user that is currently logged in
    // this.authGuard.canActivate();
    
    this.auth.profile().subscribe(user => {
        this.user = user;
    }, (err) => {//if no login return err message
        console.error(err);
    });
  }

}

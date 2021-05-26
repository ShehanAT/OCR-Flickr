import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
//can import both classes and interfaces in the same import statement
import { AuthGuardService } from '../auth-guard.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { User } from '../shared/user.model'
import { UserService } from '../shared/user.service'
import { Router } from '@angular/router';
import { UpdateUserComponent } from '../update-user/update-user.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: User;//saving user details interface object in variable
  
  constructor(
    private auth: AuthenticationService, 
    private authGuard: AuthGuardService, 
    private modalService: NgbModal,
    private router: Router
  ) { 
  }

  ngAfterViewInit(){

    document.onclick = (args: any) : void => {
      console.log(args.target.tagName);
      if(args.target.tagName == "NGB-MODAL-BACKDROP"){
        this.modalService.dismissAll()
      }
    }
  }

  updateUser(user: User){
    const ref = this.modalService.open(UpdateUserComponent, { centered: true, windowClass : "update-user-modal"});
    ref.componentInstance.selectedUser = user;
    ref.result.then((yes) =>{
      console.log("Submit clicked");

    },
      (cancel) => {
        console.log('Cancel clicked');
      })
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

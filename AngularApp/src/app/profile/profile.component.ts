import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
//can import both classes and interfaces in the same import statement
import { AuthGuardService } from '../auth-guard.service';
import { NgbModal, ModalDismissReasons, NgbDate, NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { User } from '../shared/user.model';
import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  closeResult = ''
  details: User;//saving user details interface object in variable
  // 
  
  constructor(private auth: AuthenticationService, private authGuard: AuthGuardService, private modalService: NgbModal) { }

  open(content){
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    })
  }

  private getDismissReason(reason: any): string {
    // return ''
    if (reason === ModalDismissReasons.ESC){
      return 'by pressing ESC';
    }else if (reason == ModalDismissReasons.BACKDROP_CLICK){
      return 'by clicking on a backdrop';
    }else{
      return `with: ${reason}`
    }
  }

  ngOnInit() {//on start get the details of the user that is currently logged in
    this.authGuard.canActivate();
    this.auth.profile().subscribe(user => {
        this.details = user;
    }, (err) => {//if no login return err message
        console.error(err);
    });
  }
}

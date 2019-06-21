import { Component, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from '../authentication.service';
//can import both classes and interfaces in the same import statement
import { AuthGuardService } from '../auth-guard.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  details: UserDetails;//saving user details interface object in variable
  constructor(private auth: AuthenticationService, private authGuard: AuthGuardService) { }

  ngOnInit() {//on start get the details of the user that is currently logged in
    this.authGuard.canActivate();
    this.auth.profile().subscribe(user => {
        this.details = user;
    }, (err) => {//if no login return err message
        console.error(err);
    });
  }
}

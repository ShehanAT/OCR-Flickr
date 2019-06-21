import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

declare var M: any;

@Injectable()
export class AuthGuardService implements CanActivate{
    
  constructor(private auth: AuthenticationService, private router: Router) { }
  
  canActivate(){
    if(!this.auth.isLoggedIn()){//checking if user is logged in using the authentication service
        M.toast({ html: 'You must login to view this page!', classes: 'rounded'});
        this.router.navigateByUrl('/');//if not logged in redirect to home page(home component)
        return false;
    }
    return true;
  }
}

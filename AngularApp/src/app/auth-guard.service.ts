import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { ToastrService } from 'ngx-toastr';
declare var M: any;

@Injectable()
export class AuthGuardService implements CanActivate{ 
     
  constructor(private auth: AuthenticationService, private router: Router, 
    private toast: ToastrService
    ) { }
  
  canActivate(){
    if(!this.auth.isLoggedIn()){//checking if user is logged in using the authentication service
        this.toast.error('You must login to view that page!');
        // this.toast.
        this.router.navigateByUrl('/login');//if not logged in redirect to home page(home component)
        return false;
    }
    return true;
  }
}

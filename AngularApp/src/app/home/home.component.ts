import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
    if(!sessionStorage.length){
      this.auth.logout();
    }else{
      console.log('user logged in');
    }
  }

}

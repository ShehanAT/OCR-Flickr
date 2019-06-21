import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  clientHeight: number;
  constructor(public auth: AuthenticationService){
    this.clientHeight = window.innerHeight;
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  userState!:boolean
  constructor(private authSvc: AuthService){
    this.authSvc.isLoggedIn$.subscribe(x =>{this.userState=x})
  }
  logout(){
    this.authSvc.logout();
  }
}

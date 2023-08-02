import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../all-int';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userInfo: string = JSON.stringify(localStorage.getItem('accessData'))

  constructor(private authSrv:AuthService){}
  ngOnInit(){

    const jsonUser:IUser = JSON.parse(this.userInfo)
    console.log(typeof(jsonUser) )
  }
  logout(){
    this.authSrv.logout();
  }
}

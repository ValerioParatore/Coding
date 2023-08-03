import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from '../all-int';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  userInfo!:IUser

  constructor(private authSrv:AuthService){}
  ngOnInit(){
    this.authSrv.restoreUser()
    this.authSrv.user$.subscribe(user =>
      this.userInfo = user?.user as IUser
      )
      console.log(this.userInfo)
  }
  logout(){
    this.authSrv.logout();
  }
}

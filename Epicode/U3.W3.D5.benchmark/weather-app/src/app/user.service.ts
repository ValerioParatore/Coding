import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, tap } from 'rxjs';
import { IAccessData, ILogin, IRegister } from './models/user.models';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private jwtHelper: JwtHelperService = new JwtHelperService();
  apiUrl:string = 'http://localhost:3000'
  registerUrl:string = this.apiUrl + '/register';
  loginUrl:string = this.apiUrl + '/login';
   private authSubject = new BehaviorSubject<null | IAccessData>(null);
   user$ = this.authSubject.asObservable();
   isLoggedIn$ = this.user$.pipe(map(user => user?.accessToken? true : false));
   autoLogoutTimer:any;

  constructor(private http: HttpClient,
  private router: Router){}

  login(data:ILogin){
    return this.http.post<IAccessData>(this.loginUrl , data).pipe(tap(data => {
      this.authSubject.next(data);
      console.log(this.authSubject, data);

      localStorage.setItem('accessData', JSON.stringify(data));
      const expDate = this.jwtHelper.getTokenExpirationDate(data.accessToken) as Date;
    //  this.autoLogout(expDate)
    }))
  }
  autoLogout(expDate:Date){
    const expMs = expDate.getTime() - new Date().getTime();
    this.autoLogoutTimer = setTimeout(() =>{
      this.logout()
    },expMs)
  }

  logout(){
    this.authSubject.next(null);
    localStorage.removeItem('accessData');
    this.router.navigate(['/login']);
  }

  signUp(data:IRegister){
    return this.http.post<IAccessData>(this.registerUrl, data)
  }

  restoreUser(){
    const userJson:string|null = localStorage.getItem('accessData');
    if(!userJson)return
    const accessData:IAccessData = JSON.parse(userJson);
    if(this.jwtHelper.isTokenExpired(accessData.accessToken))return
    console.log(accessData);

    this.authSubject.next(accessData)
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot,  RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard {

  constructor(
    private authSvc: AuthService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let isLoged!:boolean
     this.authSvc.isLoggedIn$.pipe(map(isLoggedIn =>{

        return isLoggedIn;

      })).subscribe((bool)=>{isLoged = bool});
      return isLoged
  }
  // canActivateChild(
  //   childRoute: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

  //   return this.canActivate(childRoute, state);

  // }

}

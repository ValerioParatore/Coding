import { Component } from '@angular/core';
import { IRegister } from '../all-int';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  formData: IRegister ={
    nome: '',
    cognome: '',
    eta: 0,
    email: '',
    password: 'password',
  }
constructor(    private authSvc:AuthService,
  private router:Router){}
  register(){
    this.authSvc.signUp(this.formData)
    .subscribe(res => {
      console.log('registrato')
      this.router.navigate(['/home'])
    })
  }

}

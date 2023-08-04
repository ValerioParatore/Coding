import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IRegister } from 'src/app/models/user.models';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  formData: IRegister = {
    nome: '',
    cognome: '',
    email: '',
    password: 'password',
  }
  constructor( private router:Router, private userSvc: UserService){}
  submit(){
    this.userSvc.signUp(this.formData).subscribe(res =>{
      alert('Registrazione effettuata correttamente! Ora effettua il login')
    })
    this.router.navigate(['/login'])
  }
}

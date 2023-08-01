import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent {
  generi:string[] = ['uomo','donna','altro'];
  form!: FormGroup

  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.form = this.fb.group({
      authData: this.fb.group({
        nome: this.fb.control(null,[Validators.required]),
        cognome: this.fb.control(null,[Validators.required]),
        password: this.fb.control(null,[Validators.required]),
        confPassword: this.fb.control(null,[Validators.required]),
        genere : this.fb.control(null,[Validators.required]),
        imgProfilo : this.fb.control(null,[Validators.required]),
        username : this.fb.control(null, [Validators.required])
      })
    });
  }
  isValid(fieldName: string) {
    return this.form.get(fieldName)?.valid
  }
  isTouched(fieldName: string) {
    return this.form.get(fieldName)?.touched
  }

}

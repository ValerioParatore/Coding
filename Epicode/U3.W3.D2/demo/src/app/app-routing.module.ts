import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';

const routes: Routes = [
  {path: 'registrati', component:ReactiveFormComponent},
  {path: 'login', component: TemplateDrivenComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

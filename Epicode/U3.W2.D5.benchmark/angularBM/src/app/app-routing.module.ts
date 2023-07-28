import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodosComponent } from './component/todos/todos.component';
import { CompletiComponent } from './component/completi/completi.component';

const routes: Routes = [
  {path: '', redirectTo : 'todos', pathMatch : 'full'},
  {path: 'todos', component: TodosComponent},
  {path:'completi', component: CompletiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

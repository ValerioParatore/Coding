import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttiviComponent } from './Pages/attivi/attivi.component';
import { NonAttiviComponent } from './Pages/non-attivi/non-attivi.component';
import { HomeComponent } from './Pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'attivi', component: AttiviComponent },
  { path: 'non-attivi', component: NonAttiviComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

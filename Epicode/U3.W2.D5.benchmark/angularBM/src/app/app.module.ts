import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { TodosComponent } from './component/todos/todos.component';
import { CompletiComponent } from './component/completi/completi.component';
import { SpinnerComponent } from './component/spinner/spinner.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TodosComponent,
    CompletiComponent,
    SpinnerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

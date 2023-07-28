
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './component/card/card.component';
import { CardsListComponent } from './component/cards-list/cards-list.component';
import { HomeComponent } from './Pages/home/home.component';
import { AttiviComponent } from './Pages/attivi/attivi.component';
import { NonAttiviComponent } from './Pages/non-attivi/non-attivi.component';
import { NavComponent } from './component/nav/nav.component';
import { Page404Component } from './Pages/page404/page404.component';
import { AuthorPipe } from './author.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    HomeComponent,
    AttiviComponent,
    NonAttiviComponent,
    CardComponent,
    NavComponent,
    Page404Component,
    AuthorPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

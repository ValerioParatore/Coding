import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { Products } from 'src/app/dati';

@Component({
  selector: 'app-preferiti',
  templateUrl: './preferiti.component.html',
  styleUrls: ['./preferiti.component.scss']
})
export class PreferitiComponent {
  preferiti: Products[] = [];
}

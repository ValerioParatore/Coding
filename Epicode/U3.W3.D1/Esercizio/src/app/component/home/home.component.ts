
import { Component, Output } from '@angular/core';
import { Dati, Products } from 'src/app/dati';
import { DatiService } from 'src/app/dati.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  products: Products[] = [];
  preferiti: Products[] = [];
  constructor(private datiSvc:DatiService) { }
  ngOnInit() {
    this.datiSvc.getAll().subscribe(data => {
      this.products = data.products;
    });
  }
  addToPref(id:number){
    this.datiSvc.getById(id).subscribe(data => {
      this.preferiti.push(data);
      console.log(data);
      console.log(this.preferiti);

    });
  }
}

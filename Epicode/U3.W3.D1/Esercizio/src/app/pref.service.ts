import { Injectable } from '@angular/core';
import { DatiService } from './dati.service';
import { Products } from './dati';

@Injectable({
  providedIn: 'root'
})
export class PrefService {

  constructor(private datiSrv:DatiService) { }
  preferiti: Products[] = [];
}

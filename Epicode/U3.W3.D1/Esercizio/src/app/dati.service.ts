import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dati, Products } from './dati';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatiService {
  private url:string = 'https://dummyjson.com/products';
  constructor(private http:HttpClient) { }
  getAll():Observable<Dati>{
    return this.http.get<Dati>(this.url);
  }
  getById(id:number):Observable<Products>{
    return this.http.get<Products>(this.url+'/'+id);
  }
}

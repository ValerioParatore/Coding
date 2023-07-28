import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  private loading: boolean = true;

  constructor() { }

  setLoading(loading: boolean) {
    this.loading = true;
    fetch('http://localhost:3000/todos', {}).then(response =>{

      this.loading = loading;
      console.log(this.loading);
    })
  }

  getLoading(): boolean {
    return this.loading;
  }
}

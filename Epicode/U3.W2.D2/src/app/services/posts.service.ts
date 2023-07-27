import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';
//Injectable (decoratore) => specifica che questa classe puo' essere iniettata in un constructor
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url: string = "https://dummyjson.com/posts"
  posts: Post[] = []
  constructor() { }

  getPosts() {
    //ritorniamo un valore di tipo Promise per permetterci di eseguire azioni solo alla fine di questa funzione
    return fetch(this.url)
      .then(res => res.json())
      .then((json) => {
        this.posts = json.posts
      })
      .catch(err => console.error(err))
      //console.error segna l'errore in rosso in console, niente di strano :D
  }
  //versione async
  // async getPosts(): Promise<Post[]> {
  //   //per far funzionare questa funzione con Async/Await dobbiamo utilizzare Promise.resolve e .reject
  //   try {
  //     let res = await fetch(this.url)
  //     let json: { posts: Post[] } = await res.json()
  //     //la specifica del tipo della riga precedente e' solo per "sicurezza" nostra,
  //     //ts mette il tipo su any in automatico non potendo prevedere cosa ritornera' l'array
  //     this.posts = json.posts
  //     return Promise.resolve(json.posts)
  //     //Promise.resolve fa procedere il codice al .then :)
  //   } catch (error) {
  //     console.error(error)
  //     return Promise.reject(error)
  //     //"rifiuta" la promise in caso di errore === va nel catch!
  //   }
  // }
}

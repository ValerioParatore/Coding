import { Injectable } from '@angular/core';
import { Post } from '../interface/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url: string = "http://localhost:3000/posts"
  posts: Post[] = []
  constructor() { }

  getPosts() {
    return fetch(this.url)
      .then(res => res.json())
      .then((json) => {
        this.posts = json
      })
      .catch(err => console.error(err))

}
 isActive(){
  return fetch(this.url+"?active=true").then(res => res.json()).then((json) => {this.posts = json})
}
isNotActive(){
  return fetch(this.url+"?active=false").then(res => res.json()).then((json) => {this.posts = json})
}
changeAct(el:number, current:boolean){
  return fetch(this.url+"/"+el, {
    method: 'PATCH',
    body: JSON.stringify({active: !current}),
    headers: {
      'Content-Type': 'application/json'
    }
  })
}
}

import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  url:string= "http://localhost:3000/todos"
  todosList: Todo[] = [];

  constructor() { }
  getTodos(){
    return  fetch(this.url )
    .then(res => res.json())
    .then((json)=>{this.todosList = json})
    .catch((err)=>{console.log(err)})
  }
  getCompleted(){
    return fetch(this.url+"?completed=true")
    .then(res => res.json())
    .then((json)=>{this.todosList = json})
    .catch((err)=>{console.log(err)})
  }
  getUncompleted(){
    return fetch(this.url+"?completed=false")
    .then(res => res.json())
    .then((json)=>{this.todosList = json})
    .catch((error)=>{console.log(error)})
  }
  addTodo(todo:Todo){
    return fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    }).then(res => res.json())
  }
  changeList(el:number, current:boolean){
    return fetch(this.url+"/"+el, {
      method: 'PATCH',
      body: JSON.stringify({completed: !current}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
  deleteTodo(id:number){
    return fetch(this.url+"/"+id, {
      method: 'DELETE',
      body: JSON.stringify({id:id}),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }

}

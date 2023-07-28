import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent {
  newTodo: Todo = new Todo(Math.floor(Math.random()* 10000000001), '', false);
  list: Todo[] = [];
  constructor(private todoService: TodoService , private router: Router) {
    this.todoService.getUncompleted().then(_ => {
      this.list = this.todoService.todosList
  })
  }
  add(){
    this.todoService.addTodo(this.newTodo);
    setTimeout(()=>{
      this.router.navigate(['app-todos'])
    },2000)
  }
  done(el:number, current:boolean){
    this.todoService.changeList(el,current)}
}

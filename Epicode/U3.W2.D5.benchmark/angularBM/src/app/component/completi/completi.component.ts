import { Component } from '@angular/core';
import { Todo } from 'src/app/todo';
import { TodoService } from 'src/app/todo.service';

@Component({
  selector: 'app-completi',
  templateUrl: './completi.component.html',
  styleUrls: ['./completi.component.scss']
})
export class CompletiComponent {
  completedList: Todo[] = []
  constructor(private todoService: TodoService) {
    this.todoService.getCompleted().then(_ => {
      this.completedList = todoService.todosList;
    })
   }
   cancella(id:number){
    this.todoService.deleteTodo(id)
   }
}

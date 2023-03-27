import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todosService.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit{
 
  public todos:Todo [];

  constructor(private todosService: TodosService) {}

  addTodo(newTodo: Todo) {
    this.todosService.addTodo(newTodo);
  }

  ngOnInit(): void {
    this.todos = this.todosService.getTodos();
  }

  onSearch(key:string) {
    this.todos=  this.todosService.searchTodo(key);
  }

  onDelete(todo:Todo) {
    this.todosService.deleteTodo(todo);
    this.todos = this.todosService.getTodos();
  }
}

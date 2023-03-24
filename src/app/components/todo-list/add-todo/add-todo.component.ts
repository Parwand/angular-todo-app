import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  @Output() todo: EventEmitter<Todo> = new EventEmitter<Todo>();

  addNewTodo(addForm: NgForm) {
    this.todo.emit(addForm.value)
  }
}

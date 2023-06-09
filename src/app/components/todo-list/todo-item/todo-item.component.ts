import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() public todo: Todo;
  @Output() public onDelete: EventEmitter<Todo> = new EventEmitter<Todo>();

  onDeleteTodo(todo: Todo) {
    this.onDelete.emit(todo);
  }
}

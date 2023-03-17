import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { AppState } from '../../app.reducer';
import { filtrosValidos } from '../ngrxjs/filtro/filtro.actions';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  todos: Todo[] = [];
  filtro: string = 'todos';
  constructor(private store: Store<AppState>) {
    this.store.subscribe(todos => {
      this.todos = todos.todos
      this.filtro = todos.filtro
    })
  }


}

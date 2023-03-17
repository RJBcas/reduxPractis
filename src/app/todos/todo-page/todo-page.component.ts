import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { changeAllCompleted } from '../ngrxjs/todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css']
})
export class TodoPageComponent {
  completeTodo: boolean = false;
  constructor(private store: Store<AppState>) {

  }
  toggleall() {

    this.completeTodo = !this.completeTodo;
    this.store.dispatch(changeAllCompleted({ completado: this.completeTodo }))
  }
}

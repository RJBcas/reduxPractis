import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import * as action from '../ngrxjs/todo.actions';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent {
  txtInput: FormControl;
  constructor(private store: Store<AppState>) {
    this.txtInput = new FormControl('', [Validators.required, Validators.min(4)])
  }
  agregar() {
    console.log(this.txtInput.value)
    console.log(this.txtInput.valid)

    if (this.txtInput.invalid) {
      return;
    } else {
      this.store.dispatch(action.crearTodo({ texto: this.txtInput.value }))
      this.txtInput.reset()
    }
  }

}

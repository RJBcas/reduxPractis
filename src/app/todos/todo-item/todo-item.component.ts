import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../models/todo.model';
import { FormControl, Validators } from '@angular/forms'
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { deleteTodo, editar, toggle } from '../ngrxjs/todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo = {} as Todo;
  @ViewChild('inputFisico') txtInputFisico: ElementRef = {} as ElementRef;

  chkCompletado: FormControl;
  txtInput: FormControl;
  editando: boolean = false;

  constructor(private store: Store<AppState>) {
    this.chkCompletado = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.text, Validators.required)
  }


  ngOnInit(): void {
    this.chkCompletado.setValue(this.todo.completado)
    this.txtInput.setValue(this.todo.text)
    this.chkCompletado.valueChanges.subscribe(valor =>
      this.store.dispatch(toggle({ id: this.todo.id }))
    )

    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
  }
  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtInputFisico.nativeElement.select()
    }, 1);
  }
  terminarEdicion() {
    this.editando = false;
    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.todo.text) { return; }
    if (this.txtInput.value === '') { this.txtInput.setValue(this.todo.text) }


    this.store.dispatch(editar({
      id: this.todo.id,
      texto: this.txtInput.value
    }))


  }
  eliminar() {
    this.store.dispatch(deleteTodo({ id: this.todo.id }))
  }


}

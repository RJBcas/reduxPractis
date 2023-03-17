import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import { filtros, filtrosValidos } from '../ngrxjs/filtro/filtro.actions';
import { cleanComplet } from '../ngrxjs/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css']
})
export class TodoFooterComponent {

  filtroActual: string = '';
  filtrosView: filtrosValidos[] = ['todos', 'completados', 'pendientes']
  todoList: number = 0;

  constructor(private store: Store<AppState>) {

  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.store.subscribe(res => {
      this.filtroActual = res.filtro
      this.todoList = res.todos.filter(todo => todo.completado === false).length
    })

  }



  filtrar(filtro: filtrosValidos) {
    this.store.dispatch(filtros({ filtro }))
  }
  cleanComplet() {
    this.store.dispatch(cleanComplet())
  }

}

import { createReducer, on } from '@ngrx/store';
import { Todo } from '../models/todo.model';
import { changeAllCompleted, cleanComplet, crearTodo, deleteTodo, editar, toggle } from './todo.actions';


export const initialState: Todo[] = [
  new Todo('salvar al mundo'),
  new Todo('Pasar'),
  new Todo('La '),
  new Todo('Prueba'),

];

export const TodoReducer = createReducer(
  initialState,
  on(crearTodo, (state, { texto }) => [...state, new Todo(texto)]),
  on(changeAllCompleted, (state, { completado }) => {
    return state.map(todo => {
      return {
        ...todo,
        completado
      }
    })
  }),
  on(toggle, (state, { id }) => {
    return state.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          completado: !todo.completado
        }
      } else {
        return todo;
      }
    })
  }),

  on(editar, (state, { id, texto }) => {
    return state.map(todo => {
      if (id === todo.id) {
        return {
          ...todo,
          text: texto
        }
      } else {
        return todo

      }
    })
  }),
  on(deleteTodo, (state, { id }) =>
    state.filter(todo => todo.id !== id)
  ),
  on(cleanComplet, (state) => {
    return state.filter(todo => !todo.completado)
  })

);

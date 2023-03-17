import { createAction, props } from '@ngrx/store';

export const crearTodo = createAction('[TODO] Crear Tarea',
  props<{ texto: string }>());
export const toggle = createAction('[TODO] Toggle Todo',
  props<{ id: number }>())
export const editar = createAction('[TODO] Editar Todo',
  props<{ id: number, texto: string }>())
export const deleteTodo = createAction('[TODO] Toggle Delete',
  props<{ id: number }>())
export const changeAllCompleted = createAction('[TODO] Toggle ChangeAllComplete',
  props<{ completado: boolean }>())
export const cleanComplet = createAction(' [TODO] eliminar Completados')


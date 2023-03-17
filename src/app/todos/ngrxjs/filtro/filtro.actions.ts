import { createAction, props } from "@ngrx/store";

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';


export const filtros = createAction(' [filtros] set Filtro ',
  props<{ filtro: filtrosValidos }>())

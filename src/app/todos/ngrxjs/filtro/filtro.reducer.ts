import { createReducer, on } from '@ngrx/store';
import { filtros, filtrosValidos } from './filtro.actions';


export const initialState = 'todos';
/* export const initialState: filtrosValidos = 'todos'; */


export const filtroReducer = createReducer(
  initialState,
  on(filtros, (state, { filtro }) => filtro),
)

import { ActionReducerMap } from "@ngrx/store";
import { Todo } from "./todos/models/todo.model";
import { filtrosValidos } from "./todos/ngrxjs/filtro/filtro.actions";
import { filtroReducer } from "./todos/ngrxjs/filtro/filtro.reducer";
import { TodoReducer } from "./todos/ngrxjs/todo.reducer";

export interface AppState {
  todos: Todo[],
  filtro: string
}



export const appReducers: ActionReducerMap<AppState> = {
  todos: TodoReducer,
  filtro: filtroReducer
}

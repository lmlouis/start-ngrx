import { createReducer, on } from "@ngrx/store";
import { ModelStateInterface } from "./model-state";
import * as PageAction from "./page.action";

export const InitialState: ModelStateInterface = {
  isLoading: false,
  model: [],
  error: null
}

export const FeatureReducerKey = 'reduce feature'
export const PageReducer = createReducer(
  InitialState,
  on(PageAction.getAllAction, (state)=>({...state, isLoading:true})),
  on(PageAction.getAllActionSuccess, (state, action)=>({...state, isLoading:false, model: action.data})),
  on(PageAction.getAllActionFailure, (state, action)=>({...state, isLoading:false, error: action.error}))
)

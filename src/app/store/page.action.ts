import { createAction, props } from "@ngrx/store";
import { IModel } from "../imodel";

export const getAllAction = createAction('[data] get all action');
export const getAllActionSuccess = createAction('[data] get all action Success', props<{data:IModel[]}>());
export const getAllActionFailure = createAction('[data] get all action Failure', props<{error:string}>());

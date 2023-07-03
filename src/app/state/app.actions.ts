import { createAction, props } from "@ngrx/store";
import { UserStateModel } from "./app.state";

export const actionIncreaseCounter= createAction("Increase Counter");
export const actionDecreaseCounter= createAction("Decrease Counter");


export const actionUpdateUserStateModel= createAction("action Update User StateModel",props<{user:UserStateModel}>());
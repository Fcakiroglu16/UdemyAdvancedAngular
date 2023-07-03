import { createReducer, on } from "@ngrx/store";
import { AppState, CounterState, UserState } from "./app.state";
import { actionDecreaseCounter, actionIncreaseCounter, actionUpdateUserStateModel } from "./app.actions";
import { Statement } from "@angular/compiler";



export const counterReducer = createReducer<CounterState>({ Counter: 0 },

    on(actionIncreaseCounter, (state): CounterState => {
        return { ...state, Counter: state.Counter + 1 };
    }),
    on(actionDecreaseCounter, (state): CounterState => {

        return { ...state, Counter: state.Counter - 1 };
    })
)

export const userReducer = createReducer<UserState>({ userStateModel:{ userId:0, userEmail:"", userName:""}},

on(actionUpdateUserStateModel,(state,actionData):UserState=>{

 
    return {...state,userStateModel:actionData.user}
})
  
)
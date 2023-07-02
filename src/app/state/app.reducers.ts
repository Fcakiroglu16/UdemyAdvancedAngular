import { createReducer, on } from "@ngrx/store";
import { AppState } from "./app.state";
import { actionDecreaseCounter, actionIncreaseCounter } from "./app.actions";
import { Statement } from "@angular/compiler";



export const counterReducer = createReducer<AppState>({ Counter: 0},

    on(actionIncreaseCounter, (state): AppState => {
        return { ...state, Counter: state.Counter + 1 };
    }),
    on(actionDecreaseCounter, (state): AppState => {

        return { ...state, Counter: state.Counter - 1 };
    })
)
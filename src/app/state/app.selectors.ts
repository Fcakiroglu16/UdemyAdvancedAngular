import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState, UserState } from "./app.state";


const getCounterState= createFeatureSelector<CounterState>("counterStoreSlice");

export const getCounterSelector = createSelector(getCounterState,state=>state.Counter);



const getUserState= createFeatureSelector<UserState>("userStoreSlice");

export const getUserStateModelSelector = createSelector(getUserState,state=>state.userStateModel);




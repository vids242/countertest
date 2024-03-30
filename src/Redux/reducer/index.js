import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";

export const RootReducer = combineReducers({
    counter : counterReducer
})
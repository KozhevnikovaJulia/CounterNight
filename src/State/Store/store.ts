import { reducer } from "../reducer";
import {combineReducers, createStore} from "redux";


const rootReducer = combineReducers({
    state: reducer      
})

export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType <typeof rootReducer>

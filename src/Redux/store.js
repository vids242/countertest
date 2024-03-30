import { createStore, applyMiddleware } from 'redux'
import {thunk} from 'redux-thunk'
import { RootReducer } from './reducer'


export const configureStore = ( ) => {
    const store = createStore(RootReducer, applyMiddleware(thunk))

    return store
}


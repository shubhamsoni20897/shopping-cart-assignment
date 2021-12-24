import {combineReducers,applyMiddleware, createStore} from "redux"
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { loginReducer } from "./reducers/loginReducer"
import { cartReducer } from "./reducers/cartReducer"

export const store =createStore(combineReducers({
loginReducer,cartReducer
}),applyMiddleware(thunk,logger))
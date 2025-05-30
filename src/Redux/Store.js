import { applyMiddleware, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import {thunk} from 'redux-thunk'
import combineReducers from "./Reducers/CombineReducer"

const myStore = createStore(combineReducers, composeWithDevTools(applyMiddleware(thunk)))

export default myStore
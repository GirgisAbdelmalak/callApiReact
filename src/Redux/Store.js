import { createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import favouriteReducer from "./Reducers/FavouriteReducer"

const myStore = createStore(favouriteReducer, composeWithDevTools())

export default myStore
import { combineReducers } from "redux";
import favouriteReducer from "./FavouriteReducer";
import moviesReducer from "./MoviesReducer";

export default combineReducers({
    myFavourite: favouriteReducer,
    myMovies: moviesReducer
})
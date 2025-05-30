import axios from "axios"
import { useContext } from "react";
import { languageContext } from "../../context/LanguageConetext";
export const getMovies = (language ) => (dispatch) => {
    const api_key = "29cf44b93ca83bf48d9356395476f7ad"
    const langCode = language === "English" ? "ar" : language === "العربية" ? "en" : "ar";


    return axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=1&language=${langCode}`)
    .then((res) => 
        dispatch({
            type: 'GET_MOVIES',
            payload: res.data
        })
    )
    .catch((err) => console.log(err))
}
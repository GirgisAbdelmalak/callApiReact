import { useEffect, useState } from "react";
import axios from 'axios'
import MyCard from "../components/MyCard";
import { useDispatch,useSelector } from "react-redux";
import { getMovies } from "../Redux/Action/MoviesAction";
import { useContext } from "react";
import { languageContext } from "../context/LanguageConetext";

function AllMovies(){
    

    const {contLanguage, setContLanguage} = useContext(languageContext)
    const moviesList = useSelector(state => state.myMovies.moviesList); 
    const dispatch = useDispatch()
    useEffect(() => {
        const lang = contLanguage === 'English' ? 'en' : 'ar';
        dispatch(getMovies(contLanguage));
    }, [dispatch, contLanguage]);

    return(
        <>  
            <div className="container">
                <div className="row mt-5 mb-5">
                    
                    {
                        moviesList.map(movie =>{
                            return <MyCard 
                                        img = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                                        name = {movie.title}
                                        path = {`/movie/${movie.id}`}
                                        movie = {movie}
                                    />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AllMovies;
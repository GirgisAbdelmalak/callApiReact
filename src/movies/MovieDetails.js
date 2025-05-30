import { useEffect, useState } from "react";
import axios from 'axios'
import MyCard from "../components/MyCard";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { languageContext } from "../context/LanguageConetext";
function MovieDetails(){
    const[movie,setMovie] = useState({})
    const movieId = useParams().id
    const { contLanguage, setContLanguage } = useContext(languageContext);

    useEffect(() => {
        axios
            .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=29cf44b93ca83bf48d9356395476f7ad&language=${contLanguage == "English" ? "ar" : contLanguage === "العربية" ? "en" : "ar"}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err));
    }, [movieId, contLanguage]);
    return(
        <>
            <div className="container">
                <div className="my-5 d-flex justify-content-center">
                    <MyCard 
                        img = {`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        name = {contLanguage == 'English' ? movie.title:movie.original_title}
                        status = {movie.status}
                        info = {movie.overview}
                        
                        />
                </div>
            </div>
        </>
    )
}

export default MovieDetails;
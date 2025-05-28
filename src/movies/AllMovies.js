import { useEffect, useState } from "react";
import axios from 'axios'
import MyCard from "../components/MyCard";

function AllMovies(){
    const [moviesList, setMoviesList] = useState([])

    useEffect(()=>{
        axios.get('https://api.themoviedb.org/3/movie/popular?api_key=29cf44b93ca83bf48d9356395476f7ad')
        .then((res) => setMoviesList(res.data.results))
        .catch((err) => console.log(err))
    },[])    
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
                                    />
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default AllMovies;
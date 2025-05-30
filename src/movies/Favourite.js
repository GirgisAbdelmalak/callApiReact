import { useSelector } from "react-redux";
import MyCard from "../components/MyCard";
import { useEffect } from "react";
import { useContext } from "react";
import { languageContext } from "../context/LanguageConetext";
import axios from "axios";
import { useState } from "react";

export default function Favourite() {
  const favoriteList = useSelector(state => state.myFavourite);
  const { contLanguage } = useContext(languageContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const lang = contLanguage === 'English' ? 'ar' : 'en';
      if (favoriteList.length === 0) {
      setFavorites([]);
      return;
    }
  
    const updatedFavorites = [];
  
    favoriteList.forEach((movie) => {
      axios
        .get(`https://api.themoviedb.org/3/movie/${movie.id}?api_key=29cf44b93ca83bf48d9356395476f7ad&language=${lang}`)
        .then((res) => {
          updatedFavorites.push(res.data);
          if (updatedFavorites.length === favoriteList.length) {
            setFavorites(updatedFavorites);
          }
        })
        .catch((err) => console.log("Error fetching movie", movie.id, err));
    });
  }, [contLanguage, favoriteList]);
  
  return (
    <div className="container">
      <div className={`${contLanguage == 'English'? 'd-flex flex-end':'d-flex flex-start'}`}>
        <h2 className="my-4">{contLanguage == 'English'?'افلامك المفضلة':'Your Favorite Movies'}</h2>
      </div>
      <div className="row">
        {
          favorites.length == 0 ? <p className="mx-4">{contLanguage=='English'?'لا توجد اى افلام فى قائمة مفضلاتك':'No Movies in your favourite list'}</p> : favorites.map((movie) => (
            
                <MyCard
                    img={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                    name={movie.title}
                    path={`/movie/${movie.id}`}
                    movie={movie}
                    
                />
          ))
        }
      </div>
    </div>
  );
}

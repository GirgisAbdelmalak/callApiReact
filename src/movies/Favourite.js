import { useSelector } from "react-redux";
import MyCard from "../components/MyCard";

export default function Favourite() {
  const favorites = useSelector(state => state); 
  return (
    <div className="container">
      <h2 className="my-4">Your Favorite Movies</h2>
      <div className="row">
        {
          favorites.map((movie) => (
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

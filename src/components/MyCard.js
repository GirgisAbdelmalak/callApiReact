import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa";
import { Favourite } from "../Redux/Action/FavouriteActions";
import { useDispatch,useSelector } from "react-redux";
function MyCard(props){
    const dispatch = useDispatch();
    const favorites = useSelector(state => state);
    const isFav = props.movie && favorites.some(m => m.id === props.movie.id);

    const handleFavClick = () => {
        if (props.movie) {
          dispatch(Favourite(props.movie));
        }
      };
    return(
        
        <div className={`card  ${props.info ? 'col-md-4' : 'col-md-3 mt-3 me-5'}`} >
            <img src={props.img} className="card-img-top img-fluid mb-3" alt="..." />
            <h5 className="card-title">{props.name}</h5>
            <div className="card-body">
                
                {
                    props.path && <Link className="btn btn-outline-dark rounded-0" to={props.path}> View Movie </Link> 
                }
                {
                    props.overview &&  <h5>  {props.overview} </h5>
                }

                {
                    props.info && <p className="card-text"> {props.info}</p>
                }
                {
                    props.status && <h5>  {props.status} </h5>
                }
                {props.movie && (
                    <button
                    type="button"
                    style={{
                        background: "none",
                        border: "none",
                        position: "absolute",
                        top: 10,
                        left: 10,
                        cursor: "pointer",
                    }}
                    onClick={handleFavClick}
                    >
                    <FaStar color={isFav ? "gold" : "gray"} size={28} />
                    </button>
                )}
            </div>
        </div>
    )

}


export default MyCard
import { Link } from "react-router-dom"

function MyCard(props){
    // col-md-3 mt-3 me-5
    return(
        <div className={`card  ${props.info ? 'col-md-6' : 'col-md-3 mt-3 me-5'}`} >
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
            </div>
        </div>
    )

}


export default MyCard
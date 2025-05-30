const INITIAL_VALUE = {
    moviesList: []
}

export default function moviesReducer (state = INITIAL_VALUE,action){
    switch (action.type){
        case 'GET_MOVIES':
            return{
                ...state,
                moviesList: action.payload.results
            }
        default:
            return state
    }
}
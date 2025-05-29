const favourite = []

export default function favouriteReducer(state = favourite, action){
    switch(action.type){
        case "FAVOURITE":
            const movie = action.payload
            const exists = state.find(m => m.id === movie.id);
            if(exists){
                return state.filter(m => m.id !== movie.id)
            }
            else{
                return [
                    ...state,
                    movie
                ]
            }

        default:
            return state;
    }
}

// {
//     type: 'ADD_MOVIES',

// }
// {
//     type:'DECREASE_COUNT'
// }

//action types
export const ADD_MOVIES = 'ADD_MOVIES';
export const ADD_FAVOURITES = 'ADD_FAVOURITES';
export const REMOVE_FAVOURITE = 'REMOVE_FAVOURITE';
export const SET_SHOW_FAVOURITE = 'ET_SHOW_FAVOURITE';
//action creators
export function addMovies(movies){
    return{
        type:ADD_MOVIES,
        movies:movies
    }
}

export function addFavourites(movie){
    return{
        type:ADD_FAVOURITES,
        movie:movie
    }
}

export function removeFavourite(movie){
    return{
        type:REMOVE_FAVOURITE,
        movie:movie
    }
}


export function setShowFavourites(val){
    return{
        type:SET_SHOW_FAVOURITE,
        val
    }
}
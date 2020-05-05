import {ADD_MOVIES} from '../actions/index'
import {ADD_FAVOURITES , REMOVE_FAVOURITE,SET_SHOW_FAVOURITE} from '../actions/index'

const initialMovieState = {
    list:[],
    favourites:[],
    showFavourites:false
}

export default function  movies(state=initialMovieState,action){
    // if(action.type === ADD_MOVIES){
    //     return {
    //         ...state,
    //         list: action.movies,
    //     }
    // }
    // return state;

    switch(action.type){
        case ADD_MOVIES:{
            return {
                ...state,
                list:action.movies
            }
        }
        case ADD_FAVOURITES:{
            return{
                ...state,
                favourites:[action.movie, ...state.favourites]
            }
        }
        case REMOVE_FAVOURITE:{
            const filteredArray= state.favourites.filter(
                movie => movie.Title !== action.movie.Title
            )
            return{
                ...state,
                favourites:filteredArray
            }
        }
        case SET_SHOW_FAVOURITE:{
            return{
                ...state,
                showFavourites:action.val
            }
        }
        default:{
            return state;
        }
    }
}

// const intialSearchState = {
//     result:{}
// };

// export function search (state = intialSearchState,action){
//     return state;
// }

// const initalRootState = {
//     movies:initialMovieState,
//     search:intialSearchState
// }
// export default function rootReducer(state=initalRootState,action){
//     return {
//         movies: movies(state,action),
//         search:search(state,action)
//     }
// }


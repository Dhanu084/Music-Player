import React from 'react';
import {addFavourites, removeFavourite} from '../actions/index';

class MovieCard extends React.Component{
    handleFavorites =() =>{
        const {movie, isFavourite} = this.props;
        this.props.dispatch(addFavourites(movie))
    }
    handleUnFavorites =() =>{
        const {movie} = this.props;
        this.props.dispatch(removeFavourite(movie))
    }

  render(){
      const {movie,isFavourite} = this.props
      //console.log(movie)
    return (
        <div className="movie-card">
            <div className="left">
                <img src={movie.Poster} alt="Movie Poster" />
            </div>
            <div className="right">
                <div className="title">{movie.Title}</div>
                <div className="plot">{movie.Plot}</div>
                <div className="footer">
                    <div className="rating"> {movie.imdbRating}</div>
                    {
                        !isFavourite
                        ?<button className="favourite-btn" onClick={this.handleFavorites}>Favourite</button>
                        :<button className="unfavourite-btn" onClick={this.handleUnFavorites}>UnFavourite</button>
                    }
                </div>
            </div>
        </div>
      );
  }
}

export default MovieCard;

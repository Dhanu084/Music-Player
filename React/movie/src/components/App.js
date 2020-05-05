import React from 'react';
import {data} from '../data';
import Navbar from './Navbar';
import MovieCard from './MovieCard'
import {addMovies} from '../actions/index'
import {setShowFavourites} from '../actions'
class App extends React.Component {
  componentDidMount(){
    //make api call
    //dispatch an action to the 
    const {store} = this.props;
    console.log(store);
    store.subscribe( ()=>{
        console.log("Updated");
        this.forceUpdate();
    });
    store.dispatch(addMovies(data));
    
  }

  isMovieFavorite = (movie) =>{
    const {favourites} = this.props.store.getState();
    console.log(favourites);
    const index = favourites.indexOf(movie);
    if(index !== -1){
      //movie found
      return true;
    }
    return false;
  }
  onChangeTab = (val) =>{
        this.props.store.dispatch(setShowFavourites(val))
  }

  render(){
  const {list,favourites,showFavourites} = this.props.store.getState();
  // console.log(this.props.store.getState());
    const displayMovies = showFavourites?favourites:list;
  return (
      <div className="main">
        <Navbar />
        <div className="main">
            <div className="tabs">
                <div className={`tab ${showFavourites ? '':'active-tabs'}`} onClick={()=>this.onChangeTab(false)}>Movies</div>
                <div className={`tab ${showFavourites ? 'active-tabs':''}`} onClick={() =>this.onChangeTab(true)}>Favourites</div>
            </div>

            <div className="list">
                {displayMovies.map((movie,index) =>(
                  <MovieCard movie={movie} 
                  key={`movies-${index}`} 
                  dispatch = {this.props.store.dispatch}
                  isFavourite = {this.isMovieFavorite(movie)} 
                  />
                ))}
            </div>
            {displayMovies.length==0?<div className="no-movies">No movies to display!</div>:null}
        </div>
      </div>
    );
  }
}

export default App;

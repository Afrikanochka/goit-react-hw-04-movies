import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MoviesListStyled from "./MoviesListStyled";

class MoviesList extends Component {
    state = {  }
    render() {
        return (
            <MoviesListStyled>
            {this.props.newMovies.map((movie) => (
               <li className="movieItem" key={movie.id}>
                  <Link  to={{
                pathname: `/movies/${movie.id}`,
                state: { from: this.props.location },
              }}>
                  <img src={"https://image.tmdb.org/t/p/w300" + movie.poster_path} alt={movie.title} className="movieImg" />
                  <h2 className="title">{movie.title}</h2>
                  </Link>
               </li> 
            ))}
            </MoviesListStyled>
        );
    }
}

export default MoviesList;
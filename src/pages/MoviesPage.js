import React, { Component } from 'react';

class MoviesPage extends Component {
    state = { 
        value: '',
        movies: [],
        status: 'idle',
     }
    render() {
        const {movies, value} = this.state;
        return (
            <div className="container">
            <div className="homePage">
              <form className="form" >
                <button type="button" >
                  Clear
                </button>
    
                <input
                  type="text"
                  name="name"
                  value={value}
                  
                />
    
                <button type="submit">Search</button>
              </form>
            </div>
    
            {/* <MoviesList movies={movies} /> */}
          </div>  
        );
    }
}

export default MoviesPage;

// status:
// --- 'idle', - простаивание
// --- 'pending', - ожидание
// --- 'resolved', - разрешение
// --- 'rejected' - отклонение
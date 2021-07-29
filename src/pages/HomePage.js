import React, { Component } from 'react';

class HomePage extends Component {
    state = { 
        movies: [],
     }
    render() {
        const {movies} = this.state;
        return (
            <div className="container">
                <h2 className="homePage">Trending today</h2>
                {/* <MoviesList movies={movies} /> */}
            </div>
        );
    }
}

export default HomePage;
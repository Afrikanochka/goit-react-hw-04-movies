import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePageStyled from "../styles/HomePageStyled";
import { trendingMovies } from "../services/Api";

class HomePage extends Component {
  state = {
    movies: [],
  };

  async componentDidMount() {
    await trendingMovies()
      .then((results) => this.setState({ movies: results }))
      .catch((error) => console.log(error));
  }

  render() {
    const { movies } = this.state;
    
    return (
      <div className="container">
        <HomePageStyled>
          <h2 className="homePageTitle">Trending today</h2>
          <ul className="homeList">
            {movies.length &&
              movies.map((movie) => (
                <li className="homeItem" key={movie.id}>
                  <Link
                    to={{
                      pathname: `/movies/${movie.id}`,
                      state: { from: this.props.location.pathname },
                    }}
                    className="homeLink"
                  >
                    <img
                      src={
                        "https://image.tmdb.org/t/p/w300" + movie.poster_path
                      }
                      alt={movie.title}
                      className="homeImg"
                    />
                    <h2 className="homeTitle">{movie.title}</h2>
                  </Link>
                </li>
              ))}
          </ul>
        </HomePageStyled>
      </div>
    );
  }
}

export default HomePage;

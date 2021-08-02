import React, { Component } from "react";
import { Link } from "react-router-dom";
import HomePageStyled from "../styles/HomePageStyled";
import { trendingMovies } from "../services/Api";
import Loader from "react-loader-spinner";

class HomePage extends Component {
  state = {
    movies: [],
    isLoading: false,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    await trendingMovies()
      .then((results) => this.setState({ movies: results }))
      .catch((error) => console.log(error))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  }

  render() {
    const { movies, isLoading } = this.state;
    
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
        {isLoading && <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />}
      </div>
    );
  }
}

export default HomePage;

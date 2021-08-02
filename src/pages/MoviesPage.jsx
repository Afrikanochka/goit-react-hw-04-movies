import React, { Component } from "react";
import Searchbar from "../component/searchbar/Searchbar";
import MoviesList from "../component/moviesList/MoviesList";
import Loader from "react-loader-spinner";
import { getMovieByQuery } from "../services/Api";
import queryString from "query-string";

class MoviesPage extends Component {
  state = {
    query: "",
    page: 1,
    newMovies: [],
    isLoading: false,
  };

  componentDidMount() {
    const {location} = this.props;
    const { query } = queryString.parse(location.search);

    if (query) {
      this.setState({
        query: query,
        newMovies: [],
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.searchMovies();
    }
  }

  handleChange = (query) => {
    this.setState({ query: query, newMovies: [] });
    this.props.history.push({ search: `query=${query}`})
  };

  searchMovies = async () => {
    const {query} = this.state;
    this.setState({ isLoading: true });
    console.log("query");
    await getMovieByQuery(query)
    .then((response) => 
    this.setState({ newMovies: response, }))
    .catch((error) => console.log(error))
    .finally(() => {
      this.setState({ isLoading: false});
    });

  };

  render() {
    const { newMovies,isLoading } = this.state;
    return (
      <>
       <div className="moviesWrapper">
          <Searchbar onSubmit={this.handleChange} />
          {newMovies.length > 0 && (
            <MoviesList
            newMovies={newMovies}
              location={this.props.location}
            />
          )}
        </div>
        {isLoading && <Loader
        type="ThreeDots"
        color="#00BFFF"
        height={80}
        width={80}
        timeout={3000} //3 secs
      />}
      </>
    );
  }
}

export default MoviesPage;



import React, { Component } from "react";
import MoviesPageStyled from "./MoviesPageStyled";

class Searchbar extends Component {
    state = { 
        query: "",
     };

     handleChange = (e) => {
      this.setState({ query: e.currentTarget.value });
      
    };
  
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.onSubmit(this.state.query);
      this.setState({ query: "" });
    };

    render() {
        const {query} = this.state;
        return (
            <MoviesPageStyled className="Searchbar">
            <form className="SearchForm" onSubmit={this.handleSubmit}>
              <button type="submit" className="SearchForm-button">
                <span className="SearchForm-button-label">Search</span>
              </button>
    
              <input
                className="SearchForm-input"
                type="text"
                value={query}
                onChange={this.handleChange}
                autoComplete="off"
                autoFocus
                placeholder="Search movies"
              />
            </form>
          </MoviesPageStyled>  
        );
    }
}

export default Searchbar;
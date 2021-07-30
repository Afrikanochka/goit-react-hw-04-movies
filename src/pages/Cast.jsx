import React, { Component } from "react";
import { getMovieCast } from "../services/Api";
import CastStyled from "../styles/CastStyled";
import defaultImg from "../images/unnamed.jpg";

class Cast extends Component {
  state = {
    castData: {},
  };

  async componentDidMount() {
    const id = this.props.match.params.id || "";
    await getMovieCast(id)
      .then((results) => this.setState({ castData: results }))
      .catch((error) => console.log(error));
  }

  render() {
    const { castData } = this.state;
    return (
      <CastStyled>
        {castData.id ? (
          <ul className="castList">
            {castData.cast.map(({ id, profile_path, name }) => (
              <li className="castItem" key={id}>
                <img
                  className="castImg"
                  src={
                    profile_path
                      ? `https://image.tmdb.org/t/p/w300${profile_path}`
                      : defaultImg
                  }
                  alt={name}
                />
                <h2 className="castTitle">{name}</h2>
              </li>
            ))}
          </ul>
        ) : (
          <h2 className="notFound">Page not found </h2>
        )}
      </CastStyled>
    );
  }
}

export default Cast;

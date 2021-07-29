import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PrevMovie from '../prevMovie/PrevMovie';

const MovieList = ({ movies, location }) => {
    return (
        <ul className="moviesList">
      {movies.map(({ id, poster_path, title, release_date }) => (
        <li key={id} className="item">
          <Link
            to={{
              pathname: `/movies/${title} ${id}}`,
              // pathname: `/movies/${id}`,
              state: { from: location },
            }}
          >
            <PrevMovie
              poster_path={poster_path}
              title={title}
              release_date={release_date}
            />
          </Link>
        </li>
      ))}
    </ul> 
    );
}

export default withRouter(MovieList);
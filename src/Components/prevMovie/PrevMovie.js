import React from 'react';

const PrevMovie = ({ poster_path, title, release_date }) => {
    return (
        <div className="MoviePrev">
        <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
  
        <div className="MoviePrev-text">
          <h5 className="MoviePrev-title">{`${title}`}</h5>
          {release_date && (
            <h5 className="MoviePrev-title">
              {`(${release_date.slice(0, 4)})`}
            </h5>
          )}
        </div>
      </div>  
    );
}

export default PrevMovie;
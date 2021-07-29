import React, { Component } from 'react';

class Cast extends Component {
    
    render() {
        const {cast} = this.props;
        return (
            <>
            <ul className="cast">
              {cast.map(({ id, original_name, profile_path }) => (
                <li className="castItem" key={id}>
                  <img
                    className="img"
                    src={
                      profile_path `https://image.tmdb.org/t/p/w500${profile_path}`
                        
                    }
                    alt=""
                  />
                  <p className="text">{original_name}</p>
                </li>
              ))}
            </ul>
          </> 
        );
    }
}

export default Cast;

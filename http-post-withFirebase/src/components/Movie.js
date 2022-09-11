import React from 'react';

import classes from './Movie.module.css';

const Movie = (movies) => {
  return (
    <li className={classes.movie}>
      <h2>{movies.title}</h2>
      <h3>{movies.releaseDate}</h3>
      <p>{movies.openingText}</p>
    </li>
  );
};

export default Movie;

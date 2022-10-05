import React from "react";
import { movies } from "../data";

function Movies() {
  const movieInfo = movies.map((movie) => (
    <div key={movie.title}>
      <h2>{movie.title}</h2>
      <p>Runtime: {movie.time} min.</p>
      <ul>
        {movie.genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  ));
  return (<div>{/*{code here}*/}
  <h1>Movies Page</h1>
  {movieInfo}
  </div>);
};

export default Movies;

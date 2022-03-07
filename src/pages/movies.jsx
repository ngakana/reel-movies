import { useEffect, useContext } from "react";

import MovieCard from "../components/movieCard";
import { MoviesContext } from "../contexts/MoviesContext";

function Movies() {
  const { movies, getMovies } = useContext(MoviesContext);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="movies-page">
      <ul className="movie-list">
        {movies.map((movie) => {
          return <MovieCard movie={movie} />;
        })}
      </ul>
    </div>
  );
}

export default Movies;

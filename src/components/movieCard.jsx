import { Link } from "react-router-dom";

import RatingSash from "./ratingSash";

function MovieCard({ movie }) {
  return (
    <li className="movie-card" key={movie.id}>
      <Link to={`/movies/${movie.id}`}>
        <RatingSash score={movie.imDbRating * 10} />
        <img className="img" src={movie.image} alt="movie poster" />
        <p>{movie.title}</p>
      </Link>
      <p>{movie.year}</p>
    </li>
  );
}

export default MovieCard;

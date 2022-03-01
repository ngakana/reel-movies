import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const APIkey = process.env.REACT_APP_API_KEY;

function MovieDetails() {
  const { movieId } = useParams();

  const [movie, setMovie] = useState({});
  const [showingFullplot, setShowingFullplot] = useState(false);

  const toggleFullplot = () => {
    setShowingFullplot(!showingFullplot);
  };

  const getMovieDetails = async () => {
    try {
      const res = await axios({
        method: "get",
        url: `https://imdb-api.com/en/API/Title/${APIkey}/${movieId}/Trailer`,
      });

      let data = res.data;
      setMovie(data);
    } catch (error) {
      // handle non 2XX errors
      if (error.response) {
        console.log(error.response.data);
      }
      // handle 'lost' request error
      else if (error.request) {
        console.log(error.request);
      }
      // handle unsuccessful request error
      else {
        console.log(error.message);
      }
    }
  };

  useEffect(() => {
    getMovieDetails();
  }, []);

  return (
    <div className="details-page">
      <div className="image">
        <img className="img" src={movie.image} alt="" />
        {/* <div className="img">img</div> */}
      </div>
      <div className="details">
        <span id="title">{movie.fullTitle}</span>
        <div className="info">
          <p>{movie.imDbRating}/10 (IMDb)</p>
          <p>{movie.runtimeStr}</p>
        </div>
        <span id="plot-container">
          <p id={showingFullplot ? "fullplot" : "plot"}>{movie.plot}</p>
          <span id="toggle-btn" onClick={toggleFullplot}>
            {showingFullplot ? "show less" : "show more"}
          </span>
        </span>
        <p className="item-prim">
          Content rating:{" "}
          <span className="item-sec">{movie.contentRating}</span>
        </p>
        <p className="item-prim">
          Genre: <span className="item-sec">{movie.genres}</span>
        </p>
        <p className="item-prim">
          Country: <span className="item-sec">{movie.countries}</span>
        </p>
        <p className="item-prim">
          Release: <span className="item-sec">{movie.releaseDate}</span>
        </p>
        <p className="item-prim">
          Director: <span className="item-sec">{movie.directors}</span>
        </p>
        <p className="item-prim">
          Starring: <span className="item-sec">{movie.stars}</span>
        </p>
      </div>
    </div>
  );
}

export default MovieDetails;

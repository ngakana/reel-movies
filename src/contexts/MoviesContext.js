import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const MoviesContext = createContext();

const APIkey = process.env.REACT_APP_API_KEY;

export const MoviesProvider = (props) => {
  const [movies, setMovies] = useState(() => {
    const data = localStorage.getItem("movies");
    return data == !null ? JSON.parse(data) : [];
  });

  const getMovies = async () => {
    if (movies != []) {
      try {
        const res = await axios({
          method: "get",
          url: `https://imdb-api.com/en/API/MostPopularMovies/${APIkey}`,
        });
        let data = res.data.items;
        setMovies(data);
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
    } else {
      return [];
    }
  };

  useEffect(() => {
    localStorage.setItem("movies", JSON.stringify(movies));
  }, [movies]);

  return (
    <MoviesContext.Provider value={{ movies, getMovies }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

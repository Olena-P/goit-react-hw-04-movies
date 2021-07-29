import { useState, useEffect } from "react";
import { useHistory, Link, useRouteMatch, useLocation } from "react-router-dom";
import * as themoviedbAPI from "../services/movieteka-api";
import styles from "./Views.module.css";
import noImageAv from "../Image/noImageAvailable.jpg";

export default function HomeView() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [error, setError] = useState();
  const history = useHistory();

  useEffect(() => {
    themoviedbAPI
      .getTrendingMovies()
      .then((data) => {
        history.push("/");
        setMovies(data.results);
      })
      .catch((error) => setError(error));
  }, []);

  return (
    <>
      {movies && (
        <>
          <h1 className={styles.trendToday}>Trending today</h1>
          <ul className={styles.trendItem}>
            {movies.map((movie) => (
              <li key={movie.id} className={styles.trendMovie}>
                <Link
                  to={{
                    pathname: `${url}movies/${movie.id}`,
                    state: { from: { location } },
                  }}
                  className={styles.trendLink}
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                        : noImageAv
                    }
                    alt={movie.title}
                    // width="320"
                    className={styles.imageTrend}
                  />
                  <p className={styles.title}>{movie.title}</p>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

import { useState, useEffect } from "react";
import { useHistory, useLocation, Link, useRouteMatch } from "react-router-dom";
import * as moviesTekaAPI from "../services/movieteka-api";
import noImage from "../images/noimage.jpg";
import styles from "./Views.module.css";

export default function HomePage() {
  const { url } = useRouteMatch();
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const [error, setError] = useState();
  const history = useHistory();

  useEffect(() => {
    moviesTekaAPI
      .getTrendingMovies()
      .then((data) => {
        history.push("/");
        setMovies(data.results);
      })
      .catch((error) => setError(error));
  }, [history]);

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
                        : noImage
                    }
                    alt={movie.title}
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

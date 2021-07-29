import { useState, useEffect } from "react";
import * as moviesTekaAPI from "../services/movieteka-api";
import noPhoto from "../images/noimage.jpg";
import styles from "./Views.module.css";

export default function Cast(moviesId) {
  const [cast, setCast] = useState(null);

  useEffect(() => {
    moviesTekaAPI.getCast(moviesId).then((data) => {
      if (data.cast.length === 0) {
        throw new Error("Is not available");
      }
      setCast(data.cast);
    });
  }, [moviesId]);

  return (
    <>
      <div>
        {cast && (
          <ul className={styles.cast}>
            {cast.map((item) => (
              <li key={item.id} className={styles.castItem}>
                <img
                  src={
                    item.profile_path
                      ? `https://image.tmdb.org/t/p/w300/${item.profile_path}`
                      : noPhoto
                  }
                  alt={item.name}
                  width="100"
                  height="150"
                  className={styles.castImg}
                />
                <p>{item.name}</p>
                <p className={styles.character}>
                  Character: <br />
                  {item.character}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

import { useState, useEffect } from "react";
import * as moviesTekaAPI from "../services/movieteka-api";

export default function Reviews(movieId) {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesTekaAPI.getReviews(movieId).then(setReviews);
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <p>
                <b>AUTHOR: </b> {review.author}
              </p>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>We do not have any reviews for this movie.</p>
      )}
    </>
  );
}

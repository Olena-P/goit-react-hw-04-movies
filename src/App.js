import { Switch, Route } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import Container from "./Components/Container/Container";
import HomePage from "./views/HomePage";
import MoviesPage from "./views/MoviesPage";
// import MovieDetalisPage from "./views/MovieDetalisPage";
// import Cast from "./views/Cast";
// import Reviews from "./views/Reviews";

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>

        <Route path="/movies">
          <MoviesPage />
        </Route>

        {/* <Route path="/movies/:moviesId">
          <MovieDetalisPage />
        </Route> */}

        {/* <Route path="/movies/:moviesId/cast">
          <Cast />
        </Route> */}

        {/* <Route path="/movies/:moviesId/reviews">
          <Reviews />
        </Route> */}
      </Switch>
    </Container>
  );
}

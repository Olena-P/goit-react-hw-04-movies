import { Switch, Route } from "react-router-dom";
import AppBar from "./Components/AppBar/AppBar";
import Container from "./Components/Container/Container";
import { lazy, Suspense } from "react";
import Loader from "react-loader-spinner";

const HomePage = lazy(() => import("./views/HomePage"));

const MoviesPage = lazy(() => import("./views/MoviesPage"));

const MovieDetailsPage = lazy(() => import("./views/MovieDetailsPage"));

export default function App() {
  return (
    <Container>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "80px" }}>
            <Loader
              type="Circles"
              color="#31fff5be"
              height={100}
              width={100}
              timeout={3000} //3 secs
            />
          </div>
        }
      >
        <AppBar />
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/movies" exact>
            <MoviesPage />
          </Route>

          <Route path="/movies/:moviesId">
            <MovieDetailsPage />
          </Route>

          <Route>
            <HomePage />
          </Route>
        </Switch>
      </Suspense>
    </Container>
  );
}

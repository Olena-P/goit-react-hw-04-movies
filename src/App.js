import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "react-loader-spinner";
import Container from "./Components/Container/Container";
import AppBar from "./Components/AppBar/AppBar";

const HomeView = lazy(() => import("./views/HomeView"));

const MoviesView = lazy(() => import("./views/MoviesView"));

const HomeSubView = lazy(() => import("./views/HomeSubView"));

function App() {
  return (
    <Container>
      <Suspense
        fallback={
          <div style={{ textAlign: "center", marginTop: "80px" }}>
            <Loader
              type="Puff"
              color="#48e6cb"
              height={100}
              width={100}
              timeout={3000}
            />
          </div>
        }
      >
        <AppBar />

        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/movies" exact>
            <MoviesView />
          </Route>

          <Route path="/movies/:moviesId">
            <HomeSubView />
          </Route>

          <Route>
            <HomeView />
          </Route>
        </Switch>
      </Suspense>

      <ToastContainer autoClose={3000} />
    </Container>
  );
}

export default App;

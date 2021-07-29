import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";
import MoviesPage from "../pages/MoviesPage";



export const routes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: HomePage,
  },
  {
    name: "movies",
    path: "/movies",
    exact: true,
    component: MoviesPage,
  },
  {
    name: "movieDetails",
    path: "/movies/:movie.id",
    exact: false,
    component: MovieDetailsPage,
  },

];
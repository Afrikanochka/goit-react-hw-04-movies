import { lazy } from "react";
import PageNotFound from "../pages/PageNotFound";

const mainRoutes = [
  {
    name: "home",
    path: "/",
    exact: true,
    component: lazy(() => import("../pages/HomePage")),
  },
  {
    name: "movies",
    path: "/movies",
    exact: true,
    component: lazy(() => import("../pages/MoviesPage")),
  },
  {
    name: "movieDetails",
    path: "/movies/:id",
    exact: false,
    component: lazy(() => import("../pages/MovieDetailsPage")),
  },
  { name: "pageNotFound", component: PageNotFound },
];

export default mainRoutes;

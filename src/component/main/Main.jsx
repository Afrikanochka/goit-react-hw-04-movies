import React, { Suspense } from "react";
import { Switch, Route } from "react-router";
import mainRoutes from "../../routes/mainRoutes";
import Loader from "react-loader-spinner";

const Main = () => {
  return (
    <main>
      <Suspense
        fallback={
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        }
      >
        <Switch>
          {mainRoutes.map((route) => (
            <Route
              path={route.path}
              component={route.component}
              exact={route.exact}
              key={route.path}
            />
          ))}
        </Switch>
      </Suspense>
    </main>
  );
};

export default Main;

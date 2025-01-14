import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import MovieList from "components/MovieList";
import MovieDetail from "components/MovieDetail";

export const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:id">
          <MovieDetail />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

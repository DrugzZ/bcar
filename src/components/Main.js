import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Production from "./Production";

const Main = ({ data }) => (
  <main>
    <Switch>
      <Route exact path="/" render={props => <Home {...props} data={data} />} />
      <Route path="/about" render={About} />
      <Route
        path="/:group"
        render={props => <Production {...props} data={data} />}
      />
    </Switch>
  </main>
);

export default Main;

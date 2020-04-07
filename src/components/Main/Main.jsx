import React from "react";
import "./Main.scss";
import Home from "./Home/Home";
import Posts from "./Posts/Posts";
import ReadLater from "./ReadLater/ReadLater";
import Books from "./Books/Books";

import { Route, Switch } from "react-router-dom";

function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Books" component={Books} />
        <Route path="/readLater" component={ReadLater} />
        <Route path="/Posts" component={Posts} />
      </Switch>
    </main>
  );
}

export default Main;

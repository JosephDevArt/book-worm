import React from "react";
import "./Main.scss";
import Home from "./Home/Home";
import Dialogs from "./Dialogs/Dialogs";
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
        <Route path="/dialogs" component={Dialogs} />
      </Switch>
    </main>
  );
}

export default Main;

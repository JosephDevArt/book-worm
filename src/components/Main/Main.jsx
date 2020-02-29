import React from "react";
import "./Main.scss";
import Home from "./Home/Home";
import Dialogs from "./Dialogs/Dialogs";
import MyPosts from "./MyPosts/MyPosts";
import ReadLater from "./ReadLater/ReadLater";
import MyBooks from "./Books/Books";

import { Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <Route path="/home" component={Home} />
      <Route path="/dialogs" component={Dialogs} />
      <Route path="/myPosts" component={MyPosts} />
      <Route path="/readLater" component={ReadLater} />
      <Route path="/myBooks" component={MyBooks} />
    </main>
  );
}

export default Main;

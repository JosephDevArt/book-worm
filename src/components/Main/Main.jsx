import React from "react";
import Home from "./Home/Home";
import SearchHistory from "./SearchHistory/SearchHistory";
import MyPosts from "./MyPosts/MyPosts";
import ReadLater from "./ReadLater/ReadLater";
import MyBooks from "./MyBooks/MyBooks";
import classes from "./Main.module.css";
import { Route } from "react-router-dom";

function Main() {
  return (
    <main>
      <Route path="/home" component={Home} />
      <Route path="/searchHistory" component={SearchHistory} />
      <Route path="/myPosts" component={MyPosts} />
      <Route path="/readLater" component={ReadLater} />
      <Route path="/myBooks" component={MyBooks} />
    </main>
  );
}

export default Main;

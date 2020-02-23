import React from "react";
import classes from "./Home.module.css";
function HomeContent() {
  return (
    <div>
      <div className={classes.home}>This is Home content</div>
      <div className={classes.home}>This is Home content</div>
      <div className={classes.home}>This is Home content</div>
      <div className={classes.home}>This is Home content</div>
    </div>
  );
}

export default HomeContent;

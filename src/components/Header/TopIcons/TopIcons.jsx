import React from "react";
import classes from "./TopIcons.module.css";
function TopIcons() {
  return (
    <div className={classes.icons}>
      <i className="fas fa-headset"></i>
      <i className="fas fa-adjust"></i>
      <i className="fas fa-cog"></i>
    </div>
  );
}

export default TopIcons;

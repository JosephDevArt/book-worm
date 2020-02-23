import React from "react";
import classes from "./SearchBox.module.css";
function SearchBox() {
  return (
    <div className={classes.search_box}>
      <i className={`fas fa-search  ${classes.magnifier_icon}`}></i>
      <input
        className={classes.search_input}
        type="text"
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBox;

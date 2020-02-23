import React from "react";
import "./SearchBox.scss";
function SearchBox(props) {
  return (
    <div className="search_box">
      <i className="fas fa-search  magnifier_icon"></i>
      <input className="search_input" type="text" placeholder="Search..." />
    </div>
  );
}

export default SearchBox;

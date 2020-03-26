import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
function LinkComp({ to, iconName, name }) {
  const readLaterBooks = useSelector(
    state => state.readLaterReducer.readLaterBooks
  );
  return (
    <li>
      <NavLink exact to={to} activeClassName="activeLink">
        <i className={`${iconName} link_icon`}></i>
        <span className="link_text">{name}</span>
        {name === "Read Later" ? (
          <span className="counter">{readLaterBooks.length}</span>
        ) : null}
      </NavLink>
    </li>
  );
}

export default LinkComp;

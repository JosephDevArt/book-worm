import React from "react";
import "./LinkComp.scss";
import { NavLink } from "react-router-dom";
import { useSelector, shallowEqual } from "react-redux";
function LinkComp({ to, iconName, name }) {
  return (
    <li>
      <NavLink exact to={to} activeClassName="activeLink">
        <i className={`${iconName} link_icon`}></i>
        <span className="link_text">{name}</span>
      </NavLink>
    </li>
  );
}

export default LinkComp;

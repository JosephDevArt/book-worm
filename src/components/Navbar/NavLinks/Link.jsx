import React from "react";
import "./Link.scss";
import { NavLink } from "react-router-dom";
function Link(props) {
  return (
    <li>
      <NavLink to={props.to} activeClassName="activeLink">
        <i className={`${props.className} link_icon`}></i>
        <span className="link_text">{props.name}</span>
      </NavLink>
    </li>
  );
}

export default Link;

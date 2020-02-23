import React from "react";
import classes from "./Link.module.css";
import { NavLink } from "react-router-dom";
function Link(props) {
  return (
    <li>
      <NavLink to={props.to} activeClassName={classes.activeLink}>
        <i className={`${props.className} ${classes.link_icon}`}></i>
        <span className={classes.link_text}>{props.name}</span>
      </NavLink>
    </li>
  );
}

export default Link;

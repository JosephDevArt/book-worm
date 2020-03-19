import React from "react";
import logo from "./Logo.svg";
import LinkComp from "./NavLinks/LinkComp";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
function Nav() {
  return (
    <nav>
      <img src={logo} className="logo" alt={"logo"} />
      <ul>
        <LinkComp name="Home" iconName="fas fa-home" to="/" />
        <LinkComp name="Books" iconName="fas fa-book" to="/Books" />
        <LinkComp name="Read Later" iconName="far fa-star" to="/readLater" />
        <LinkComp name="My Posts" iconName="fas fa-paper-plane" to="/myPosts" />
        <LinkComp name="Dialogs" iconName="far fa-comments" to="/dialogs" />
      </ul>
    </nav>
  );
}

export default Nav;

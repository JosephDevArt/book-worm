import React from "react";
import logo from "./Logo.svg";
import Link from "./NavLinks/Link";
import { NavLink } from "react-router-dom";
import "./Nav.scss";
function Nav() {
  return (
    <nav>
      <img src={logo} className="logo" alt={"logo"} />
      <ul>
        <li>
          <NavLink to="/" exact activeClassName="activeLink">
            <i className={`fas fa-home link_icon`}></i>
            <span className="link_text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/myBooks" activeClassName="activeLink">
            <i className={`fas fa-book link_icon`}></i>
            <span className="link_text">Books</span>
          </NavLink>
        </li>
        {/* <Link name="Books" className="fas fa-book" to="/myBooks" /> */}
        <Link name="Read later" className="far fa-star" to="/readLater" />
        <Link name="My Posts" className="fas fa-paper-plane" to="/myPosts" />
        <Link name="Dialogs" className="far fa-comments" to="/dialogs" />
      </ul>
    </nav>
  );
}

export default Nav;

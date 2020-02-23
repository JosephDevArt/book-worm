import React from "react";
import logo from "./Logo.svg";
import Link from "./NavLinks/Link";
import classes from "./Nav.module.css";
function Nav() {
  return (
    <nav>
      <img src={logo} className={classes.logo} alt={"logo"} />
      <ul>
        <Link name="Home" className="fas fa-home" to="/home" />
        <Link name="My Books" className="fas fa-book" to="/myBooks" />
        <Link name="Read later" className="far fa-star" to="/readLater" />
        {/* <i class="far fa-comments"></i> */}
        <Link name="My Posts" className="fas fa-paper-plane" to="/myPosts" />
        <Link name="Dialogs" className="far fa-comments" to="/dialogs" />
      </ul>
    </nav>
  );
}

export default Nav;

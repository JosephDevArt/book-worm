import React from "react";
import logo from "./Logo.svg";
import LinkComp from "./NavLink/LinkComp";
import HamMenu from "./HamMenu/HamMenu";
import { useSelector } from "react-redux";
function Nav() {
  const navIsOpen = useSelector((state) => state.navbar.navIsOpen);
  return (
    <>
      <HamMenu />
      <nav className={navIsOpen ? "main-nav nav-slide-right" : "main-nav"}>
        <img src={logo} className="logo" alt={"logo"} />
        <ul>
          <LinkComp name="Home" iconName="fas fa-home" to="/" />
          <LinkComp name="Books" iconName="fas fa-book" to="/Books" />
          <LinkComp name="Read Later" iconName="far fa-star" to="/readLater" />
          <LinkComp name="Posts" iconName="fas fa-paper-plane" to="/Posts" />
        </ul>
      </nav>
    </>
  );
}

export default Nav;

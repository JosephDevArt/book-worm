import React from "react";
import SearchBox from "./SearchBox/SearchBox";
import TopIcons from "./TopIcons/TopIcons";
import UserInfo from "./UserInfo/UserInfo";
import classes from "./Header.module.css";

function Header() {
  return (
    <header>
      <SearchBox />
      <TopIcons />
      <UserInfo />
    </header>
  );
}

export default Header;

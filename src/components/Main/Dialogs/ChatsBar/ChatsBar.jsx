import React from "react";
import classes from "./ChatsBar.module.css";
import SearchBox from "../../../Header/SearchBox/SearchBox";
import UserChatInfo from "./UserChatInfo/UserChatInfo";

function ChatsBar() {
  return (
    <div className={classes.sidebar}>
      <SearchBox />

      <UserChatInfo />
      <UserChatInfo />
      <UserChatInfo />
      <UserChatInfo />
      <UserChatInfo />
      <UserChatInfo />
      <UserChatInfo />
      <UserChatInfo />
      <UserChatInfo />
    </div>
  );
}

export default ChatsBar;

import React from "react";
import classes from "./UserInfo.module.css";
import userImg from "./User-img.png";
function UserInfo() {
  return (
    <div className={classes.user_account}>
      <p className={classes.user_name}>Michael Jordan</p>
      <img src={userImg} alt="user" />
      <i className={`fas fa-sign-out-alt ${classes.logout_icon}`}></i>
    </div>
  );
}

export default UserInfo;

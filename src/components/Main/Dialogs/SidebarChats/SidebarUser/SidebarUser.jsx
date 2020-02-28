import React from "react";
import "./SidebarUser.scss";
import userImg from "../../user.svg";

function SidebarUser() {
  return (
    <li className="sidebar_user">
      <img src={userImg} alt="" />
      <div className="sidebar_user_chat">
        <h4>Aslan Gurbanov</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <p>20 February</p>
    </li>
  );
}

export default SidebarUser;

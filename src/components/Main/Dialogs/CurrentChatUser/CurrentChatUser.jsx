import React from "react";
import "./CurrentChatUser.scss";
import userImg from "../user.svg";
function CurrentChatUser() {
  return (
    <div className="current_chat_user_info">
      <img src={userImg} alt="" />
      <div className="user_info">
        <h4>Aslan Gurbanov</h4>
        <p>Online</p>
      </div>
    </div>
  );
}

export default CurrentChatUser;

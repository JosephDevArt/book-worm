import React from "react";
import userImg from "../user.svg";
import "./UserChatInfo.scss";
function UserChatInfo() {
  return (
    <div className="user_chat_info">
      <img src={userImg} alt="" />
      <div className="users_chat">
        <h4>Aslan Gurbanov</h4>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <p>20 February</p>
    </div>
  );
}

export default UserChatInfo;

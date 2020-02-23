import React from "react";
import "./Chat.scss";
import userImg from "../ChatsBar/user.svg";
function Chat() {
  return (
    <div className="chat_section">
      <div className="current_chat_user_info">
        <img src={userImg} alt="" />
        <div className="user_info">
          <h4>Aslan Gurbanov</h4>
          <p>Online</p>
        </div>
      </div>
      <div className="chat_history">
        <div className="user_message">Hey Man</div>
        <div className="my_message">Hi Aslan</div>
        <div className="user_message">Hey Man</div>
      </div>
      <div className="send_message_box">
        <textarea placeholder="Type a message..."></textarea>
        <button className="send_btn" title="send message">
          Send
        </button>
      </div>
    </div>
  );
}

export default Chat;

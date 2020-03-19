import React from "react";
import "./Dialogs.scss";
import SidebarChats from "./SidebarChats/SidebarChats";
import Chat from "./Chat/Chat";
import CurrentChatUser from "./CurrentChatUser/CurrentChatUser";
function Dialogs() {
  return (
    <section className="dialogs-section">
      <CurrentChatUser />
      <Chat />
      <SidebarChats />
    </section>
  );
}

export default Dialogs;

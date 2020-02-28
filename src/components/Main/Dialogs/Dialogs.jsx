import React from "react";
import "./dialogs.scss";
import SidebarChats from "./SidebarChats/SidebarChats";
import Chat from "./Chat/Chat";
import CurrentChatUser from "./CurrentChatUser/CurrentChatUser";
function Dialogs() {
  return (
    <section className="dialogs_section">
      <CurrentChatUser />
      <Chat />
      <SidebarChats />
    </section>
  );
}

export default Dialogs;

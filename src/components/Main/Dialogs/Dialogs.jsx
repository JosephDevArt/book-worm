import React from "react";
import ChatsBar from "./ChatsBar/ChatsBar";
import "./dialogs.scss";
import Chat from "./Chat/Chat";
function Dialogs() {
  return (
    <section className="dialogs_section">
      <ChatsBar />
      <Chat />
    </section>
  );
}

export default Dialogs;

import React from "react";
import "./SidebarChats.scss";
import SearchBox from "../../../Header/SearchBox/SearchBox";
import SidebarUser from "./SidebarUser/SidebarUser";

function SidebarChats() {
  return (
    <div className="sidebar_chats">
      <SearchBox />
      <ul>
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
      </ul>
    </div>
  );
}

export default SidebarChats;

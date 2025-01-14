import React from "react";
import "../Style/Sidebar.css";
function SidebarRow({ Icon, title }) {
  return (
    <div className="sidebarRow">
      <Icon className="sidebarRow__icon" />
      <h2 className="sidebarRow__h2 sidebarRow__title">{title}</h2>
    </div>
  );
}

export default SidebarRow;

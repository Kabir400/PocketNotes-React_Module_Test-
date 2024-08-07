import React from "react";
import "../css/sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Pocket Notes</div>
      <div className="sidebar-box">
        <div className="sidebar-groups">
          <div className="sidebar-group">
            <div className="sidebar-profile">PW</div>
            <p className="sidebar-group-text">PHYSICS WALLA</p>
          </div>
          <div className="sidebar-group">
            <div className="sidebar-profile">PW</div>
            <p className="sidebar-group-text">PHYSICS WALLA</p>
          </div>
        </div>
      </div>
      <div className="sidebar-btn">+</div>
    </div>
  );
}

export default Sidebar;

import React from "react";
import "../css/sidebar.css";

function Sidebar({ toggle, deta }) {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Pocket Notes</div>
      <div className="sidebar-box">
        <div className="sidebar-groups">
          {deta.map((ele, index) => {
            return (
              <div className="sidebar-group" key={index}>
                <div
                  className="sidebar-profile"
                  style={{ backgroundColor: ele.color }}
                >
                  {ele.title[0]}
                </div>
                <p className="sidebar-group-text">{ele.title}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="sidebar-btn" onClick={toggle}>
        +
      </div>
    </div>
  );
}

export default Sidebar;

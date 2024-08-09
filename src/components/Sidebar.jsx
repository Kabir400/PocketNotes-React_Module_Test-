import React from "react";
import getLetters from "../utility/getLetters.js";

import "../css/sidebar.css";

function Sidebar({ toggle, deta, index, setIndex }) {
  return (
    <div className="sidebar">
      <div className="sidebar-title">Pocket Notes</div>
      <div className="sidebar-box">
        <div className="sidebar-groups">
          {deta.map((ele, i) => {
            return (
              <div
                className={`sidebar-group ${i == index ? "sidebar-bg" : ""}`}
                key={i}
                onClick={() => setIndex(i)}
              >
                <div
                  className="sidebar-profile"
                  style={{ backgroundColor: ele.color }}
                >
                  {getLetters(ele.title)}
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

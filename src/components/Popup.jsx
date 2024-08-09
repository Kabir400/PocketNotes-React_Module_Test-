import React from "react";
import "../css/popup.css";
import { colorArr } from "../utility/colorArr";

function Popup({ show, onClose, setDeta, group, setGroup }) {
  //create group function
  const createGroup = (e) => {
    if (group.title) {
      setDeta((prevDeta) => {
        const updatedDeta = [...prevDeta, group];
        localStorage.setItem("pocketDeta", JSON.stringify(updatedDeta));
        return updatedDeta;
      });
      onClose();
      setGroup({ ...group, title: "" });
    } else {
      alert("Please Enter a Group Name!");
    }
  };
  //--------------------

  if (!show) {
    return null;
  }
  return (
    <div className="popup" onClick={onClose}>
      <div className="popup-content" onClick={(e) => e.stopPropagation()}>
        <h3 className="popup-title">Create New group</h3>
        <div className="popup-input">
          <h3>Group Name</h3>
          <input
            type="text"
            placeholder="Enter group name"
            value={group.title}
            onChange={(e) => setGroup({ ...group, title: e.target.value })}
          />
        </div>
        <div className="popup-chose-color">
          <h3>Choose colour</h3>
          <div className="color-box">
            {colorArr.map((ele, index) => {
              return (
                <div
                  className={`color ${
                    group.color == ele ? "color-border" : ""
                  }`}
                  key={index}
                  style={{ backgroundColor: ele }}
                  onClick={() => {
                    setGroup({ ...group, color: ele });
                  }}
                ></div>
              );
            })}
          </div>
        </div>
        <div className="popup-btn" onClick={createGroup}>
          Create
        </div>
      </div>
    </div>
  );
}

export default Popup;

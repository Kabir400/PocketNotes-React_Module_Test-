import React from "react";
import bg from "../assets/background_img.png";
import lock from "../assets/lock.png";

import "../css/chat-section-pre.css";
function ChatSectionPre() {
  return (
    <div className="chat-section-pre">
      <div className="bg-img">
        <img src={bg} alt="BACKGROUND IMAGE" />
      </div>
      <div className="chat-section-pre-text-box">
        <h2>Pocket Notes</h2>
        <p>
          Send and receive messages without keeping your phone online. Use
          Pocket Notes on up to 4 linked devices and 1 mobile phone
        </p>
      </div>
      <div className="encription">
        <img src={lock} alt="ENCRIPTION ICON" />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  );
}

export default ChatSectionPre;

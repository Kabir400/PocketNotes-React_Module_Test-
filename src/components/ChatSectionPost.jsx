import React from "react";
import sendBtn from "../assets/send_btn.png";
import dot from "../assets/dot.png";

import "../css/chat-section-post.css";
function ChatSectionPost() {
  return (
    <div className="chat-section-post">
      {/* chat header */}
      <div className="chat-header">
        <div className="chat-profile">RM</div>
        <p>RAM MAHTA</p>
      </div>

      {/* chat body */}
      <div className="chat-body">
        <div className="chat-text-box">
          <p className="chat-text">
            Another productive way to use this tool to begin a daily writing
            routine. One way is to generate a random paragraph with the
            intention to try to rewrite it while still keeping the original
            meaning. The purpose here is to just get the writing started so that
            when the writer goes onto their day's writing projects, words are
            already flowing from their fingers.
          </p>
          <div className="chat-timestamp">
            <p>9 Mar 2023</p>
            <div className="dot"></div>
            <p>10:10 AM</p>
          </div>
        </div>
      </div>

      {/* chat-footer */}
      <div className="chat-footer">
        <form>
          <textarea
            type="text"
            className="chat-input"
            placeholder="Enter your text here..........."
          />
          <button type="submit" className="chat-send-btn">
            <img src={sendBtn} alt="Submit" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatSectionPost;

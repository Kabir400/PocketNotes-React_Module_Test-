import React, { useState } from "react";
import sendBtn from "../assets/send_btn.png";
import getLetters from "../utility/getLetters";
import { getCurrentDate, getCurrentTime } from "../utility/timeStamp";

import "../css/chat-section-post.css";
function ChatSectionPost({ index, deta, setDeta }) {
  const [message, setMessage] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const updatedDeta = deta.map((ele, i) =>
      i == index
        ? {
            ...ele,
            notes: [
              ...ele.notes,
              { text: message, time: getCurrentTime(), date: getCurrentDate() },
            ],
          }
        : ele
    );
    localStorage.setItem("pocketDeta", JSON.stringify(updatedDeta));
    setDeta(updatedDeta);
    setMessage("");
  };

  return (
    <div className="chat-section-post">
      {/* chat header */}
      <div className="chat-header">
        <div
          className="chat-profile"
          style={{ backgroundColor: deta[index].color }}
        >
          {getLetters(deta[index].title)}
        </div>
        <p>{deta[index].title}</p>
      </div>

      {/* chat body */}
      <div className="chat-body">
        {deta[index].notes.map((ele, index) => {
          return (
            <div className="chat-text-box" key={index}>
              <p className="chat-text">{ele.text}</p>
              <div className="chat-timestamp">
                <p>{ele.date}</p>
                <div className="dot"></div>
                <p>{ele.time}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* chat-footer */}
      <div className="chat-footer">
        <form onSubmit={submitHandler}>
          <textarea
            type="text"
            className="chat-input"
            placeholder="Enter your text here..........."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="chat-send-btn"
            disabled={message ? false : true}
          >
            <img
              src={sendBtn}
              alt="Submit"
              className={message ? "active" : ""}
            />
          </button>
        </form>
      </div>
    </div>
  );
}

export default ChatSectionPost;

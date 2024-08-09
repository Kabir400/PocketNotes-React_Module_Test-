import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import ChatSectionPre from "./components/ChatSectionPre";
import Popup from "./components/Popup";

import "./css/app.css";
import ChatSectionPost from "./components/ChatSectionPost";

function App() {
  const [deta, setDeta] = useState([]); //for main data

  const [show, setShow] = useState(false); //for showing popup
  const [group, setGroup] = useState({
    title: "",
    color: "#B38BFA",
    notes: [],
  }); //for setting up the group

  const [index, setIndex] = useState(-1); //setting up the index for post-chat

  const toggleModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    const savedDeta = JSON.parse(localStorage.getItem("pocketDeta"));

    if (savedDeta) {
      setDeta(savedDeta);
    }
  }, []);

  return (
    <div className="home-container">
      <Sidebar toggle={toggleModal} deta={deta} setIndex={setIndex}></Sidebar>
      {index < 0 ? (
        <ChatSectionPre></ChatSectionPre>
      ) : (
        <ChatSectionPost index={index} deta={deta} setDeta={setDeta} />
      )}

      <Popup
        show={show}
        onClose={toggleModal}
        group={group}
        setGroup={setGroup}
        setDeta={setDeta}
      ></Popup>
    </div>
  );
}

export default App;

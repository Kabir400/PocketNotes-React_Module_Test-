import React, { useState, useEffect } from "react";

import Sidebar from "./components/Sidebar";
import ChatSectionPre from "./components/ChatSectionPre";
import Popup from "./components/Popup";

import "./css/app.css";

function App() {
  const [deta, setDeta] = useState([]); //for main data

  const [show, setShow] = useState(false); //for showing popup
  const [group, setGroup] = useState({
    title: "",
    color: "#B38BFA",
    notes: [],
  }); //for setting up the group

  const toggleModal = () => {
    setShow(!show);
  };

  useEffect(() => {
    const savedDeta = JSON.parse(localStorage.getItem("pocketDeta"));
    console.log(savedDeta);
    if (savedDeta) {
      setDeta(savedDeta);
    }
  }, []);

  return (
    <div className="home-container">
      <Sidebar toggle={toggleModal} deta={deta}></Sidebar>
      <ChatSectionPre></ChatSectionPre>
      <Popup
        show={show}
        onClose={toggleModal}
        group={group}
        setGroup={setGroup}
        deta={deta}
        setDeta={setDeta}
      ></Popup>
    </div>
  );
}

export default App;

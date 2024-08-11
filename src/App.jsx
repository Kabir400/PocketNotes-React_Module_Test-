import React, { useState, useEffect, useRef } from "react";

import Sidebar from "./components/Sidebar";
import ChatSectionPre from "./components/ChatSectionPre";
import Popup from "./components/Popup";

import "./css/app.css";
import "./css/mediaQuery.css";

import ChatSectionPost from "./components/ChatSectionPost";

function App() {
  const chatRef = useRef(null); // setting up the ref for mobile dom manupulation
  const sidebarRef = useRef(null); // setting up the ref for mobile dom manupulation

  const [deta, setDeta] = useState([]); //for main data
  const [isMobile, setIsMobile] = useState(false); //for checking the screen size

  const [show, setShow] = useState(false); //for showing popup
  const [group, setGroup] = useState({
    title: "",
    color: "#B38BFA",
    notes: [],
  }); //for setting up the group

  const [index, setIndex] = useState(-1); //setting up the index for post-chat

  //toggle popup
  const toggleModal = () => {
    setShow(!show);
  };

  //change ui(show chat)
  const changeToChat = () => {
    if (isMobile) {
      if (chatRef.current) {
        chatRef.current.style.display = "flex";
      }
      if (sidebarRef.current) {
        sidebarRef.current.style.display = "none";
      }
    }
  };

  //change ui(show sidebar)
  const changeToSidebar = () => {
    if (chatRef.current) {
      chatRef.current.style.display = "none";
    }
    if (sidebarRef.current) {
      sidebarRef.current.style.display = "block";
    }
  };

  //show chat function
  const showChat = (i) => {
    setIndex(i);
    changeToChat();
  };

  //go back sidebar
  const goBack = () => {
    setIndex(-1);
    changeToSidebar();
  };

  //handle resize function for small screen
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 800);
  };

  //this useEffect for updating the ui in the small screen
  useEffect(() => {
    if (isMobile) {
      if (index < 0) {
        changeToSidebar();
      } else {
        changeToChat();
      }
    } else {
      if (sidebarRef.current) {
        sidebarRef.current.style = "block";
      }
      if (chatRef.current) {
        chatRef.current.style = "flex";
      }
    }
  }, [isMobile]);

  //this useEffect for checking screen size
  useEffect(() => {
    // Check initial screen size
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //this useEffect for fetching the deta
  useEffect(() => {
    const savedDeta = JSON.parse(localStorage.getItem("pocketDeta"));

    if (savedDeta) {
      setDeta(savedDeta);
    }
  }, []);

  return (
    <div className="home-container">
      <Sidebar
        toggle={toggleModal}
        deta={deta}
        index={index}
        ref={sidebarRef}
        showChat={showChat}
      ></Sidebar>
      {index < 0 ? (
        <ChatSectionPre></ChatSectionPre>
      ) : (
        <ChatSectionPost
          index={index}
          deta={deta}
          setDeta={setDeta}
          ref={chatRef}
          goBack={goBack}
        />
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

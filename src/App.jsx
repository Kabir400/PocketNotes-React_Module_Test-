import React from "react";
import Sidebar from "./components/Sidebar";
import ChatSectionPre from "./components/ChatSectionPre";
import "./css/app.css";

function App() {
  return (
    <div className="home-container">
      <Sidebar></Sidebar>
      <ChatSectionPre></ChatSectionPre>
    </div>
  );
}

export default App;

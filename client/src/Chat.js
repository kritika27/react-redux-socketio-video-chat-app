import React from "react";
import "./App.css";
import { Link } from "react-router-dom";
import { Sidebar } from "./containers/Sidebar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

function Chat() {
  return (
    <div id="container">
      <Link to="/video">Video Chat</Link>
      <Sidebar />
      <section id="main">
        <MessagesList />
        <AddMessage />
      </section>
    </div>
  );
}

export default Chat;

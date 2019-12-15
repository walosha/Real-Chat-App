import React from "react";
import Message from "../message/Message";
import "./messageDisplay.css";

const MessageDisplay = ({ messages }) => (
  <div className="MessageDisplayStyles">
    {messages.map((message, key) => (
      <Message key={key} message={message} />
    ))}
  </div>
);

export default MessageDisplay;

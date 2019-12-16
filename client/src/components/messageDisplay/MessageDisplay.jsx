import React from "react";
import ReactScrollToBottom from "react-scroll-to-bottom";
import Message from "../message/Message";
import "./messageDisplay.css";

const MessageDisplay = ({ messages, name }) => (
  <ReactScrollToBottom>
    <div className="MessageDisplayStyles">
      {messages.map((message, key) => (
        <Message name={name} key={key} message={message} />
      ))}
    </div>
  </ReactScrollToBottom>
);

export default MessageDisplay;

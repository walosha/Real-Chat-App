import React from "react";
import "./message.css";

const Message = ({ message }) => (
  <div className="msgRight">
    <div className="msgcontainer">
      <div className="messageAuthor">
        {message.user},{new Date(Date.now()).toLocaleString("en-us")}
      </div>
      <div className="content">{message.message}</div>
    </div>
  </div>
);

export default Message;

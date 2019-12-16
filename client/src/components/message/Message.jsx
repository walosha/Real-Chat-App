import React from "react";
import ReactEmoji from "react-emoji";
import "./message.css";

const Message = ({ message: { user, message }, name }) => (
  <div className={`${user === name ? "msgRight" : "msgLeft"} msgcontainer`}>
    <div className="messageAuthor">
      {user === name ? "You" : user},
      {new Date(Date.now()).toLocaleString("en-us")}
    </div>
    <div className="content">{ReactEmoji.emojify(message)}</div>
  </div>
);

export default Message;

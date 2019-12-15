import React from "react";
import CloseIcon from "../closeIcon/CloseIcon";

import "./charBar.css";

const ChatBar = ({ room }) => (
  <div className="appBarContainer">
    <div className="leftContainer">
      <h2 className="roomHeader">{room}</h2>
    </div>
    <div className="rightContainer">
      <CloseIcon />
    </div>
  </div>
);

export default ChatBar;

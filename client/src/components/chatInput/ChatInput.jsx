import React from "react";

const ChatInput = ({ message, setMessage, sendMessage }) => (
  <>
    <input
      value={message}
      onChange={e => {
        setMessage(e.target.value);
      }}
      onKeyPress={e => (e.key === "Enter" ? sendMessage(e) : null)}
      type="text"
    />
  </>
);

export default ChatInput;

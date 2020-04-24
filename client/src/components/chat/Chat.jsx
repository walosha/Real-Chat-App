import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import ChatBar from "../chatBar/ChatBar";
import ChatInput from "../chatInput/ChatInput";
import MessageDisplay from "../messageDisplay/MessageDisplay";

import "./chat.css";

let socket;

export const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const HOST = "http://localhost:3001/";

  useEffect(() => {
    // Parsing Query string passed to the url
    const { name, room } = queryString.parse(location.search);
    socket = io(HOST);

    setName(name);
    setRoom(room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnection");
      socket.off();
    };
  }, [location.search, HOST]);

  //Listening for Events from the backend
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };

  return (
    <div className="outerContainer">
      <div className="chatinnerContainer">
        <ChatBar room={room} />
        <MessageDisplay name={name} messages={messages} />
        <ChatInput
          setMessage={setMessage}
          sendMessage={sendMessage}
          message={message}
        />
      </div>
    </div>
  );
};

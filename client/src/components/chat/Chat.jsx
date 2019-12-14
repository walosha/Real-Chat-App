import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import queryString from "query-string";

let socket;

export const Chat = ({ location }) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const HOST = "http://localhost:3001/";

  useEffect(() => {
    const { name, room } = queryString.parse(location.search);
    socket = io(HOST);

    setName(name);
    setRoom(room);

    console.log(name, room);

    socket.emit("join", { name, room }, () => {});

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [location.search, HOST]);

  return <div>Chat</div>;
};

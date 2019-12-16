import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./join.css";

export const Join = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("Reactjs");

  const changeName = e => {
    setName(e.target.value);
  };
  const changeRoom = e => {
    setRoom(e.target.value);
  };

  return (
    <div className="outerContainer">
      <div className="innerContainer">
        <h1 className="main--header">Join Room</h1>
        <form>
          <input
            onChange={changeName}
            type="text"
            placeholder="name"
            className="name"
          />
          <select onChange={changeRoom}>
            <option value="reactjs">Reactjs</option>
            <option value="javascript">Javascript</option>
            <option value="nodejs">Nodejs</option>
          </select>
          <Link
            onClick={e => (!name || !room ? e.preventDefault() : null)}
            to={`/chat?name=${name}&room=${room}`}
          >
            <button type="submit">Join Room</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

const http = require("http");
const express = require("express");
const socketio = require("socket.io");
const router = require("./server/route");
const app = express();
const { addUsers, removeUser, getUser } = require("./server/user");

app.use(router);

const server = http.createServer(app);
const io = socketio(server);

io.on("connection", (socket) => {
  socket.on("join", ({ name, room }, callback) => {
    const { error, user } = addUsers({ id: socket.id, name, room });
    if (error) return callback(error);

    // message to only the newly joined user
    socket.emit("message", {
      user: "admin",
      message: ` ${user.name}, welcome to to ${user.room} room`,
    });

    // Message to the room except to the newly joined user
    socket.broadcast.to(user.room).emit("message", {
      user: "admin",
      message: `${user.name} has just join the ${user.room} room`,
    });
    socket.join(user.room);
    callback();
  });

  // Created an instances of messages of room members and send back to the client
  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit("message", { user: user.name, message });
    callback();
  });

  socket.on("disconnection", () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        message: `${user.name} has left the ${user.room} room`,
      });
    }
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, function () {
  console.log(`The server has started on Port ${PORT}`);
});

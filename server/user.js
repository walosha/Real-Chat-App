const users = [];

const addUsers = ({ id, name, room }) => {
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(user => {
    user.name === name && user.room === room;
  });

  if (existingUser) {
    return { error: "User has been taken" };
  }

  const user = { id, name, room };
  users.push(user);

  return { user };
};

const removeUser = id => {
  const userIndex = users.findIndex(user => id === user.id);
  if (userIndex !== -1) {
    return users.splice(userIndex, 1)[0];
  }
};

const getUser = id => users.find(user => user.id === id);

const getAllUsers = room => users.filter(room => room === user.room);

module.exports = { addUsers, removeUser, getAllUsers, getUser };

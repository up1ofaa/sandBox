import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>{user.email}</span>
    </div>
  );
}

function UserList2() {
  const users = [
    { id: 1, username: "rara", email: "rara@sandix.com" },
    { id: 2, username: "lol", email: "lol@sandix.com" },
    { id: 3, username: "caty", email: "caty@sandix.com" }
  ];
  return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
}
export default UserList2;

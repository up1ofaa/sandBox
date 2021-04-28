import React from "react";
function UserList() {
  const users = [
    { id: 1, username: "rara", email: "rara@sandix.com" },
    { id: 2, username: "lol", email: "lol@sandix.com" },
    { id: 3, username: "caty", email: "caty@sandix.com" }
  ];
  return (
    <div>
      <input />
      <input />
      <div>
        <b>{users[0].username}</b>
        <span>{users[0].email}</span>
      </div>
      <div>
        <b>{users[1].username}</b>
        <span>{users[1].email}</span>
      </div>
      <div>
        <b>{users[2].username}</b>
        <span>{users[2].email}</span>
      </div>
    </div>
  );
}
export default UserList;

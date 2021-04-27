import React from "react";

function Userlist() {
  const users = [
    { id: 1, username: "mimi", email: "mini@lala.com" },
    { id: 2, username: "lol", email: "lol@lala.com" },
    { id: 3, username: "kara", email: "kara@lala.com" }
  ];

  return (
    <div>
      <div>
        <b>{users[0].username}</b>
        <span>({users[0].email})</span>
      </div>
      <div>
        <b>{users[1].username}</b>
        <span>({users[1].email})</span>
      </div>
      <div>
        <b>{users[2].username}</b>
        <span>({users[2].email})</span>
      </div>
    </div>
  );
}

export default Userlist;

import "./styles.css";
import React, { useReducer } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";

function countActiveUser(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initalState = {
  inputs: {
    username: "",
    email: ""
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true
    },
    {
      id: 2,
      username: "olin",
      email: "olin@gmail.com",
      active: false
    },
    {
      id: 3,
      username: "lalal",
      email: "lalal@gmail.com",
      active: false
    },
    {
      id: 4,
      username: "kaka",
      email: "kaka@gmail.com",
      active: false
    }
  ]
};

export default function AppA() {
  return (
    <div className="AppA">
      <CreateUser />
      <UserList />
    </div>
  );
}

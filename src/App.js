import "./styles.css";
import React, { useCallback, useReducer, useRef } from "react";
import CreateUser from "./CreateUser";
import UserList from "./UserList";
import useInput from "./hook/useInput";

function countActiveUsers(users) {
  return users.filter((user) => user.active).length;
}

const initiateState = {
  users: [
    { id: 1, username: "rama", email: "rama@haka.com", active: true },
    { id: 2, username: "rollin", email: "rollin@haka.com", active: false },
    { id: 3, username: "cloud", email: "cloud@haka.com", active: false },
    { id: 4, username: "sender", email: "sender@haka.com", active: false }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        users: [
          ...state.users,
          {
            id: action.id,
            username: action.username,
            email: action.email,
            active: false
          }
        ]
      };
    case "TOGGLE_USER":
      return {
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case "REMOVE_USER":
      return {
        users: state.users.filter((user) => user.id !== action.id)
      };
    default:
      return state;
  }
}

export default function App() {
  const [{ username, email }, onChange, reset] = useInput({
    username: "",
    email: ""
  });

  const [state, dispatch] = useReducer(reducer, initiateState);
  const { users } = state;
  const nextId = useRef(5);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      id: nextId.current,
      username,
      email
    });
    nextId.current = +1;
    reset();
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
    //alert("toggle");
    dispatch({
      type: "TOGGLE_USER",
      id
    });
  }, []);

  const onRemove = useCallback((id) => {
    dispatch({
      type: "REMOVE_USER",
      id
    });
  }, []);

  return (
    <div className="App">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성화사용자수 : {countActiveUsers(users)}</div>
    </div>
  );
}

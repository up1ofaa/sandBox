import React, { useRef, useReducer, useMemo, useCallback } from "react";
import UserListB from "./UserListB";
import CreateUserB from "./CreateUserB";
import useInputsB from "./hooks/useInputsB";

function countActiveUser(users) {
  console.log("활성 사용자수를 세는 중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
  users: [
    {
      id: 1,
      username: "rara",
      email: "public.velopert@gmail.com",
      active: true
    },
    { id: 2, username: "roro", emial: "roro@native.com", active: false },
    { id: 3, username: "lolo", email: "lalaland@comcom.com", active: false }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {};
    case "TOGGLE_USER":
      return {};
    default:
      return state;
  }
}

function AppB() {
  const [{ username, email }, onChange, reset] = useInputsB({
    username: "",
    email: ""
  });
  const [state, dispatch] = useReducer(reducer, initialState);
  const nextId = useRef(4);

  const { users } = state;

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    reset();
    nextId.current += 1;
  }, [username, email, reset]);

  const onToggle = useCallback((id) => {
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

  const count = useMemo(() => countActiveUser(users), [users]);
  return (
    <div>
      <CreateUserB
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserListB users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자수: {count}</div>
    </div>
  );
}

export default AppB;

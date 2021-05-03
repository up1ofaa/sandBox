import "./styles.css";
import React, { useReducer, useRef, useMemo, useCallback } from "react";
import CreateUserA from "./CreateUserA";
import UserListA from "./UserListA";

function countActiveUser(users) {
  console.log("활성 사용자 수를 세는중...");
  return users.filter((user) => user.active).length;
}

const initialState = {
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

function reducer(state, action) {
  switch (action.type) {
    case "CHNAGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case "CREATE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.concat(action.user)
      };
    case "TOGGLE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user
        )
      };
    case "REMOVE_USER":
      return {
        inputs: initialState.inputs,
        users: state.users.filter((user) => user.id !== action.id)
      };
    default:
      return state;
  }
}

export default function AppA() {
  const [state, dispatch] = useReducer(reducer, initialState);
  //state 앞으로 상태 객체
  //dispatch로 조건에 따른 (type) state를 설정
  //reducer는 dispatch로 발송된 조건에 따른 state 반환함수
  //initialState는 state 객체 초기값 세팅

  const nextId = useRef(4);
  const { users } = state;
  const { username, email } = state.inputs;

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
    });
  }, []);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email
      }
    });
    nextId.current += 1;
  }, [username, email]);

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
    <div className="AppA">
      <CreateUserA
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserListA users={users} onToggle={onToggle} onRemove={onRemove} />
      <div>활성사용자 수:{count}</div>
    </div>
  );
}

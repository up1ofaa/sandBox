import "./styles.css";
import React, { useRef, useState, useMemo } from "react";
import UserList6 from "./UserList6";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는중...");
  return users.filter((user) => user.active).length;
}
/*
countActiveUsers 함수 호출시 콘솔에 메시지를  출력
예상으로는 users 가 변할때마다 함수 호출할듯
그러나 input에 입력하는 동안 onChange에 의해
컴포넌트 자체가 리렌더링 되므로 불필요할때에도 호출하여 
자원이 낭비됨
*/
export default function App2() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  }); //inputs객체 초기값 설정 및 값 변경할 함수명 선언

  const { username, email } = inputs; //각변수에 inputs객체에서 가져온 값 빼오기
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs, //inputs객체 복사
      [name]: value //inputs객체 내의 해당 항목 값 세팅
    });
  }; //input 에서 입력시 입력값 inputs 객체에 저장

  const [users, setUsers] = useState([
    { id: 1, username: "riri", email: "riri@kaka.com", active: true },
    { id: 2, username: "lool", email: "lool@kaka.com", active: false },
    { id: 3, username: "kara", email: "kara@kaka.com", active: false }
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    }; //onchange로 값 변경된 항목 포함
    setUsers([...users, user]); //기존users 객체에 추가된 user객체포함

    setInputs({
      username: "",
      email: ""
    }); //input값 초기화
    nextId.current += 1; //
  };

  const onRemove = (id) => {
    //user.id 가 파리미터로 일치하지 않는 원소만 추출해서 새로운 배열 만듬
    //=user.id가 id인것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  };

  const onToggle = (id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  };

  //const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="App2">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList6 users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자수 :{count}</div>
    </div>
  );
}

/**
 useMemo
 첫번째 파라미터는 어떻게 연산할지 정의하는 함수
두번째 파라미터는 deps배열을 넣어준다.
이배열의 내용이 바뀌면, 우리가 등록한 함수를 호출해서 값 연산
만일 내용이 바뀌지 않은면 이전에 연산한 값 재사용
  
*/

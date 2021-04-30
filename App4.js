import "./styles.css";
import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList7 from "./UserList7";
import CreateUser2 from "./CreateUser2";

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는중...");
  return users.filter((user) => user.active).length;
}

export default function App4() {
  const [inputs, setInputs] = useState({
    username: "",
    email: ""
  }); //inputs객체 초기값 설정 및 값 변경할 함수명 선언

  const { username, email } = inputs; //각변수에 inputs객체에서 가져온 값 빼오기
  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs, //inputs객체 복사
        [name]: value //inputs객체 내의 해당 항목 값 세팅
      });
    },
    [inputs] //inputs값이 변할때만 랜더링시 onChange 함수 호출
  ); //input 에서 입력시 입력값 inputs 객체에 저장

  const [users, setUsers] = useState([
    { id: 1, username: "riri", email: "riri@kaka.com", active: true },
    { id: 2, username: "lool", email: "lool@kaka.com", active: false },
    { id: 3, username: "kara", email: "kara@kaka.com", active: false }
  ]);

  const nextId = useRef(4);
  const onCreate = useCallback(() => {
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
  }, [username, email]);

  const onRemove = useCallback((id) => {
    //user.id 가 파리미터로 일치하지 않는 원소만 추출해서 새로운 배열 만듬
    //=user.id가 id인것을 제거함
    setUsers(users.filter((user) => user.id !== id));
  }, []);

  const onToggle = useCallback((id) => {
    setUsers(
      users.map((user) =>
        user.id === id ? { ...user, active: !user.active } : user
      )
    );
  }, []);

  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="App4">
      <CreateUser2
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList7 users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성 사용자수 :{count}</div>
    </div>
  );
}
/*
useCallback
함수안에서 사용하는 상태 혹은 props가 있다면 
꼭 두번째 파라미터 deps 배열안에 포함시켜야한다.

deps에 users가 들어 있기 때문에 배열이 바뀔대마다 
함수가 새로 만들어진다.
이를 최적화하기 위해서는 deps에서 users를 지운다
가능한이유는, 
useState로 관리하는 users를 참조하지 않고
함수형 업데이트를 참조하면서 setUsers에 등록하는 콜백함수의 파라미터에서
최신 users를 참조할수 있기때문

*/
//19.React.memo 참조할것

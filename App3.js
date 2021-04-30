import "./styles.css";
import React, { useRef, useState, useMemo, useCallback } from "react";
import UserList6 from "./UserList6";
import CreateUser from "./CreateUser";

function countActiveUsers(users) {
  console.log("활성 사용자 수 세는중...");
  return users.filter((user) => user.active).length;
}

export default function App3() {
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
  }, [users, username, email]);

  const onRemove = useCallback(
    (id) => {
      //user.id 가 파리미터로 일치하지 않는 원소만 추출해서 새로운 배열 만듬
      //=user.id가 id인것을 제거함
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, active: !user.active } : user
        )
      );
    },
    [users]
  );

  //const count = countActiveUsers(users);
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <div className="App3">
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
/*
useCallback
사용하는 이유: 컴포넌트 안의 함수들은 리랜더링 될떄마다
새로 만들어진다. 한번 만든 함수를  필요할때만 새로 만들고
재사용하는 것이 중요하다.
컴포넌트에서 props가 바뀌지 않았다면 VirtualDOM에
새로 랜더링하는 것 조차 하지 않고
컴포넌트의 결과물을 재사용하는 최적화 작업을 할때 함수 재사용 필수

함수안에서 사용하는 상태 혹은 props가 있다면 
꼭 두번째 파라미터 deps 배열안에 포함시켜야한다.

useCallback 은 useMemo 기반으로 만들어졌음
const onToggle = useMemo(
  () =>() =>{
    ....
  },[users]
);

*/
/*
nextId.current 인것으로 봐서 
nextId 는 ref를 통한 값 조작으로 보입니다. 
ref 의 경우 현재 상태의 값으로만 보여주기때문에 
dependency 에 넣지 않더라도 호출 시점 
현재의 값으로 보여주기 때문에 안넣은것으로 보입니다.

*/

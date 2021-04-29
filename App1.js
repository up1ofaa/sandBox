import "./styles.css";
import React, { useRef, useState } from "react";
import UserList4 from "./UserList4";
import CreateUser from "./CreateUser";

export default function App1() {
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
    { id: 1, username: "riri", email: "riri@kaka.com" },
    { id: 2, username: "lool", email: "lool@kaka.com" },
    { id: 3, username: "kara", email: "kara@kaka.com" }
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

  return (
    <div className="App1">
      <CreateUser
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList4 users={users} onRemove={onRemove} />
    </div>
  );
}
/*
배열에 항목추가하기
1) spread 연산자 (...) 전개연산자

*/

/*
useRef()를 사용할때 파라미터를 넣어주면
이 값이 .current값의 기본 값이 된다.
useRef는 일반적인 자바스크립트 객체입니다 즉 heap 영역에 저장됩니다
그래서 어플리케이션이 종료되거나 가비지 컬렉팅 될 때 까지 
참조할 때 마다 같은 메모리 주소를 가지게 되고
같은 메모리 주소를 가지기 때문에 === 연산이 항상 true를 반환하고, 
값이 바뀌어도 리렌더링 되지 않습니다.

하지만 함수 컴포넌트 내부에 변수를 선언한다면, 
렌더링 될 때마다 값이 초기화 됩니다
*/

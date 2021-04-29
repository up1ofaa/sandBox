//마운트/언마운트 관리
import React, { useEffect } from "react";
/*
useEffect
첫번째 파라미터 함수
두번째 파라미터 의존값이 들어있는 배열(deps)

deps 배열을 비우면 컴포넌트가 처음 나타날때만 useEffect에 등록한 함수가 호출
useEffect에서는 함수를 반환할수 있는데 이를 clearup함수라고 부름

*/

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타남"); //컴포넌트 등록시
    return () => {
      console.log("컴포넌트가 화면에서 사라짐"); //컴포넌트 삭제시
    };
  }, []);

  return (
    <div>
      <b
        onClick={() => onToggle(user.id)}
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black"
        }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList5({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          key={user.id}
          onRemove={onRemove}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
}

export default UserList5;
/*
useEffect
Hook을 사용하는 컴포넌트가 
마운트 됬을때 (처음 나타날때)
언마운트 됐을때 (사라질때)
업데이트 될때 (특정 props가 바뀔때)
특정 작업을 처리하는 방법

1. 마운트시 하는 작업들
props로 받은 값을 컴포넌트의 로컬 상태로 설정
외부 API요청(REST API등)
라이브러리 사용(D3, Video.js 등)
setInterval 을 통한 반복작업 혹은 setTimeout을 통한 작업예약

2. 언마운트 시에 하는 작업들
setInterval, setTimeout 을 사용하여 등록한 작업들
clear 하기(clearInterval, clearTimeout)
라이브러리 인스턴스 제거
 
*/

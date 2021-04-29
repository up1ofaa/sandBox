//마운트/언마운트 관리
import React, { useEffect } from "react";
/*
useEffect
첫번째 파라미터 함수
두번째 파라미터 의존값이 들어있는 배열(deps)

deps 특정값 넣으면
컴포넌트가 처음 마운트 될때에도 호출되고, 지정한 값이 바뀔때도 호출된다
언마운트시에도  호출이 되고, 값이 바뀌기 직전에도 호출된다. 


*/

function User({ user, onRemove, onToggle }) {
  useEffect(() => {
    console.log("user값이 설정됨");
    console.log(user);
    return () => {
      console.log("user가 바뀌기전");
      console.log(user);
    };
  }, [user]);

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

function UserList6({ users, onRemove, onToggle }) {
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

export default UserList6;

/*
useEffect 라는 Hook 을 사용하여 컴포넌트가 
마운트 됐을 때 (처음 나타났을 때), 
언마운트 됐을 때 (사라질 때), 
그리고 업데이트 될 때 (특정 props가 바뀔 때) 특정 작업을 처리하는 방법에 대해서 알아보겠습니다

화면이 처음 떴을때 실행.
deps에 [] 빈배열을 넣을 떄.
life cycle중 componentDidmount처럼 실행
화면이 사라질때 실행(clean up함수).
componentWillUnmount처럼 실행
deps에 넣은 파라미터값이 업데이트 됬을때 실행.
componentDidUpdate처럼 실행.

*/

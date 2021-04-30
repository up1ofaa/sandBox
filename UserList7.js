import React, { useEffect } from "react";

//function User({ user, onRemove, onToggle }) {
//React.memo를 사용한 컴포넌트 리랜더링 방지
const User = React.memo(
  function User({ user, onRemove, onToggle }) {
    useEffect(() => {
      console.log("user값이 설정됨");
      // console.log(user);
      return () => {
        // console.log("user가 바뀌기전");
        // console.log(user);
      };
    }, [user]);

    return (
      <div>
        <b
          onClick={() => onToggle(user.id)}
          style={{
            corsor: "pointer",
            color: user.active ? "green" : "black"
          }}
        >
          {user.username}
        </b>
        <b>({user.email})</b>
        <button onClick={() => onRemove(user.id)}>삭제</button>
      </div>
    );
  } //function User
); //React.memo

function UserList7({ users, onRemove, onToggle }) {
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

//export default UserList7;
//React.memo를 사용한 컴포넌트 리랜더링 방지
export default React.memo(UserList7);

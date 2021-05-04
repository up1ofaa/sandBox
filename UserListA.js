import React, { useEffect } from "react";

const User = React.memo(function ({ user, onToggle, onRemove }) {
  useEffect(() => {
    console.log("컴포넌트가 화면에 나타날때");
    return () => {
      //console.log('컴포넌트가 화면에서 사라질때');
    };
  }, [user]);

  /* useEffect(() => {
    console.log(user);
  });
*/ return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black"
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <b>({user.email})</b>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserListA({ users, onToggle, onRemove }) {
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

export default React.memo(UserListA);

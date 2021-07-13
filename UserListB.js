import React from "react";

function User({ key, user, onToggle, onRemove }) {
  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black"
        }}
        value={user.username}
        onClick={() => onToggle(user.id)}
      />
      <b value={user.email} />
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserListB({ users, onToggle, onRemove }) {
  return (
    <div>
      {users.map((user) => {
        <User
          key={user.id}
          user={user}
          onToggle={onToggle}
          onRemove={onRemove}
        />;
      })}
    </div>
  );
}

export default UserListB;

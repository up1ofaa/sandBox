import React from "react";

function User({ user, onToggle, onRemove }) {
  return (
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
      <span>{user.email}</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onToggle, onRemove }) {
  return (
    <div>
      {users.map((user) => (
        <User
          user={user}
          onRemove={onRemove}
          onToggle={onToggle}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default UserList;

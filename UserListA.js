import React from "react";

function User({ user, i, onToggle, onRemove }) {
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
      <b>({user.email})</b>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

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

export default UserListA;

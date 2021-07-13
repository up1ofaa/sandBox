import React from "react";

function User({ user, onToggle, onRemove, key }) {
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
      {users.map((user) => (
        <User
          user={user}
          onToggle={onToggle}
          onRemove={onRemove}
          key={user.id}
        />
      ))}
    </div>
  );
}

export default UserListB;

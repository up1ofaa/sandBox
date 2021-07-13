import React from "react";

function CreateUserB({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
        value={username}
        onChange={onChange}
        placeholder="username"
      />
      <input
        name="email"
        value={email}
        onChnage={onChange}
        placeholder="email"
      />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default CreateUserB;

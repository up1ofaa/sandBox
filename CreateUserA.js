import React from "react";

function CreateUserA({ username, email, onChange }) {
  return (
    <div>
      <input
        name="nickname"
        placeholder="이름"
        value={username}
        onChange={onChange}
      />
      <input
        name="email"
        placeholder="이메일"
        value={email}
        onChange={onChange}
      />
      <button>등록</button>
    </div>
  );
}

export default CreateUserA;

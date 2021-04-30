import React from "react";

function CreateUser2({ username, email, onChange, onCreate }) {
  return (
    <div>
      <input
        name="username"
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

      <button onClick={onCreate}>등록</button>
    </div>
  );
}

//export default CreateUser2;
//React.memo를 사용한 컴포넌트 리렌더링 방지
export default React.memo(CreateUser2);

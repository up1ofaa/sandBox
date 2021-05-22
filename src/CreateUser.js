import React from "react";

function CreateUser({ username, email, onChange, onCreate }) {
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

export default React.memo(CreateUser);

/*
컴포넌트의 props가 바뀌지 않았다면, 리랜더링 방지하여
컴포넌트의 리랜더링 성능 최적화해줄수 있는
React.memo라는 함수
: dependency(props등)가 변하지 않는다면 memorization에 있는 값 재사용
React의 Hooks에서 변화를 감지하는것은 dependency 역할
 Stack을 아낄 수 있고 특히나 React의 re-render 주기를 줄일 수 있습니다[출처] REACT : Hook <useMemo> 기억할게 !!|작성자 ondaa




*/

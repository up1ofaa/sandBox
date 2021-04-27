import React, { useState } from "react";

function InputSampe() {
  const [Invalue, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  const inputInit = () => {
    setInput("");
  };

  return (
    <div>
      <input onChange={onChange} value={Invalue} />
      <button onClick={inputInit}>초기화</button>
      <b>값</b>
    </div>
  );
}

export default InputSampe;

/** 
input onChange 이벤트
이벤트에 등록하는 함수에서는 이벤트 객체 e를 파라미터로 받아와서 사용
이 객체의 e.target은 이벤트가 발생한 DOM인 inputDOM 을 가르킴
이 DOM의 value값, 즉 e.target.value를 조회하면
현재 input에 이벽한 값이 무엇이지 알수 있음  
 
*/

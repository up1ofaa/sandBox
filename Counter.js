import React, { useState } from "react";
function Counter() {
  const [number, setNumber] = useState(0);

  const onIncrease = () => {
    console.log("+1");
    setNumber(number + 1);
    console.log(number);
  };

  const onDecrease = () => {
    console.log("-1");
    setNumber(number - 1);
    console.log(number);
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default Counter;

/*
react패키지에서 useState라는 함수를 불러옴
const [number, setNumber]= useState(0);
첫번째 원소는 현재상태, 두번째 원소는 setter함수
useState를 사용할때 상태의 기본값을 파리미터로 넣어서 호출

*/

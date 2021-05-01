//import React, { useState } from "react";
import React, { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
}

function CounterA() {
  const [number, dispatch] = useReducer(reducer, 0);

  const onIncrease = () => {
    dispatch({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    dispatch({ type: "DECREMENT" });
  };
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
    </div>
  );
}

export default CounterA;

/*

reducer는 현재 상태와 액션 객체를 파라미터로 받아와서
새로운 상태를 반환해주는 함수

function reducer(state,action){
  //새로운 상태를 만드는 로직
  //const nextState =...
  return nextState;
}

useReducer에 넣는 첫번째 파라미터는 reducer함수이고,
두번째 파라미터는 초기 상태

const [state,dispatch] = useReducer(reducer, initialState);
state: 우리가 앞으로 컴포넌트에서 사용할 수 잇는 상태를 가르킴
dispatch:액션을 발생시키는 함수라고 이해함

 
 */

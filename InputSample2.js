import React, { useState } from "react";

function InputSample2() {
  const [inputs, setInput] = useState({
    name: "",
    nickname: ""
  });

  const { name, nickname } = inputs; //비구조화 할당을 통해 값 추출

  const onChange = (e) => {
    const { value, name } = e.target; //우선 e.target에서 name과 value를 추출
    setInput({
      ...inputs, //기존의 input 객체를 복사한 뒤
      [name]: value //name 키를 가진 값을 value로 설정
    });
  };

  const onReset = () => {
    setInput({
      name: "",
      nickname: ""
    });
  };

  return (
    <div>
      <input placeholder="이름" name="name" onChange={onChange} value={name} />
      <input
        placeholder="닉네임"
        name="nickname"
        onChange={onChange}
        value={nickname}
      />
      <button onClick={onReset}>초기화</button>
      <b>값</b>
    </div>
  );
}

export default InputSample2;

/**
 * react 비구조화 할당
 1) useState는 2개의 인자를 가지고 있는데 
 첫번째 인자는 현재상태, 두번째 인자는 첫번째 인자의 상태를 변경하는 함수
 2) 비구조화 할당1
let obj ={name:'길동', age:100}
const {name, age} =obj //obj에 있는 필드명과 동일한 놈은 담아진다/
//전역변수이름으로 사용할수 있다. 순서 상관없다.
console.log(name, age); //몇개만 뽑아와서 쓸수 있다
3) 비구조화 할당2
const dr=[20,30,40] //배열을 썻으면
const [x,y,z] =dr //배열을 받아
console.log(x+y+z); //비구조화 할당
4) 비구조화 할당
state ={
  arr:[멍멍,'어흥','냥냥','깍깍']
  brr:['강아지','호랑이','고양이','까마귀']  
}
//const ar =this.state.arr //이렇게 받아내서 되지만
const {arr, brr} =this.stat //이름이 같은 얘들만 받아내겠다
// 이제 부터는 brr이라는 이름으로 사용해도 state것을 받아낼수 있다.




*/

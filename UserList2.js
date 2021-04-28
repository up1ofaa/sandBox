import React from "react";

function User({ user }) {
  return (
    <div>
      <b>{user.username}</b>
      <span>{user.email}</span>
    </div>
  );
}

function UserList2() {
  const users = [
    { id: 1, username: "rara", email: "rara@sandix.com" },
    { id: 2, username: "lol", email: "lol@sandix.com" },
    { id: 3, username: "caty", email: "caty@sandix.com" }
  ];

  const itmes = [
    { id: 0, text: "a" },
    { id: 1, text: "z" },
    { id: 2, text: "b" },
    { id: 3, text: "y" },
    { id: 4, text: "c" }
  ];
  return (
    <div>
      {users.map((arr, i) => (
        <User user={arr} key={i} />
      ))}
      {itmes.map((arr) => (
        <b key={arr.id}>{arr.text}</b>
      ))}
    </div>
  );
}
export default UserList2;

/*

return (
    <div>
      <User user={users[0]} />
      <User user={users[1]} />
      <User user={users[2]} />
    </div>
  );
 map()함수는 배열안에 있는 각 원소를 변환하여
 새로운 배열을 만들어준다
 map() 함수의 두번째 파라미터는 key로 사용된다
 key를 설정하지 않으면 기본적인 배열의 index가 key로 사용되고
 경고메시지가 뜬다. 
 각 고유 원소에 key 가 있어야만 배열이 업데이트 될때
 효율적으로 랜더링 될수있기때문



*/

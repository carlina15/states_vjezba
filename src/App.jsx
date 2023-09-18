import './App.css'
import { Component } from 'react'
import {UserClass, UserChildren, UserFunction} from './Users'

export default function App() {
  const initialUsers = [
    { name: 'Karla', age: 27 },
    { name: 'Ivan', age: 34 },
    { name: 'Sani', age: 32 },
  ];

  const tekst = "Povećaj godine";

  const [users, setUsers] = useState(initialUsers);

  const uvecajGodine = () => {
    const newUsers = users.map(user => {
      return { ...user, age: user.age + 1 };
    });
    setUsers(newUsers);
  };

  return (
    <>
      <h1>State</h1>
      <UserClass name={users[0].name} age={users[0].age} />
      <UserFunction name={users[1].name} age={users[1].age} />
      <UserChildren name={users[2].name} age={users[2].age}>
        {tekst}
      </UserChildren>
      <button onClick={uvecajGodine}>Godina više</button>
    </>
  );
};



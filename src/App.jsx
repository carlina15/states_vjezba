import './App.css'
import { Component } from 'react'
import {UserClass, UserChildren, UserFunction} from './Users'

const App = () => {
  const [users, setUsers] = useState([
    { name: 'Karla', years: 27 },
    { name: 'Ivan', years: 34 },
    { name: 'Sani', years: 31 },
  ]);

  const [tekst, setTekst] = useState('Uvećaj godine');

  const uvecajGodine = () => {
    const newUsers = users.map((user) => {
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


export default App



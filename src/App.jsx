import './App.css';
import { Component, useState } from 'react';
import {UserClass, UserChildren, UserFunction} from './Users';
import React from 'react';

export default function App() {
  const initialUsers = [
    { name: 'Karla', age: 27 },
    { name: 'Ivan', age: 34 },
    { name: 'Sani', age: 32 },
  ];

  const tekst = "Uvećaj godine";

  const [users, setUsers] = useState(initialUsers);
  const [newName, setNewName] = useState(""); 
  const [selectedUserIndex, setSelectedUserIndex] = useState(0);

  const uvecajGodine = () => {
    setUsers(prevState => {
      const newUsers = prevState.map (user => {
        return {...user, age: user.age + 1 }
    })
    return newUsers
    })
}

const promijeniIme = () => {
  setUsers((prevState) =>
    prevState.map((user, index) => {
      if (index === selectedUserIndex) {
        return { ...user, name: newName };
      }
      return user;
    })
  );
};

  return (
    <>
      <h1>State</h1>
      <input 
        type="text"
        value={newName}
        onChange={(Event) => setNewName(Event.target.value)}
       />
       <button onClick={promijeniIme}>Upiši novo ime</button>
      <UserClass name={users[0].name} age={users[0].age} />
      <UserFunction name={users[1].name} age={users[1].age} />
      <UserChildren name={users[2].name} age={users[2].age}>
        {tekst}
      </UserChildren>
      <button onClick={uvecajGodine}>Godina više</button>
    </>
  );
};



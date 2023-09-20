import './App.css';
import { Component, useState } from 'react';
import {UserClass, UserChildren, UserFunction} from './Users';
import React from 'react';

export default function App() {
  const initialUsers = [
    { id:1, name: 'Karla', age: 27 },
    { id:2, name: 'Ivan', age: 34 },
    { id:3, name: 'Sani', age: 32 },
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

const dodajNovogKorisnika = () => {
  const noviKorisnik = {id: users.length + 1, name: newName}
  setUsers((prevState) => [...prevState, noviKorisnik]);
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
       <button onClick={dodajNovogKorisnika}>Dodaj novog korisnika</button>

       {users.map((user, index) => (
        <div key={user.id}>
          <UserFunction name={user.name} age={user.age} />
        </div>
      ))}
      <button onClick={uvecajGodine}>Godina više</button>
    </>
  ); 
};



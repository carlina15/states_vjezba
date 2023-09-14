import './App.css'
import { Component } from 'react'
import {UserClass, UserChildren, UserFunction} from './Users'

const users = [
  { name: 'Ivan', age: 30, },
  { name: 'Marko', age: 35 },
  { name: 'Ana', age: 25 },
];

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       users: [
        { name: 'Ivan', age: 30, },
        { name: 'Marko', age: 35 },
        { name: 'Ana', age: 25 },
       ],
       tekst: "Unkown"
    }
  }

  uvecajGodine = () => {
    const newUsers = this.state.users.map(user => {
      return {...user, age: user.age + 1}
    })
    this.setState({users: newUsers})
  }
  render() {
    const {users, tekst} = this.state
    return (
      <>
        <h1>State</h1>
        <UserClass name={users[0].name} age={users[0].age} />
        <UserFunction name={users[1].name} age={users[1].age} />
        <UserChildren name={users[2].name} age={users[2].age}>
          {tekst}
        </UserChildren>
        <button onClick={this.uvecajGodine}>Uvećaj godine</button>
      </>
    )
  }
}

export default App



import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [isAlertVisibile, setIsAlertVisible] = useState(false)

  const handleNameChange = event => {
    setName(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleUsernameChange = event => {
    setUsername(event.target.value)
  }

  
  // useEffect(() => {
  //   console.log(name)
  // }, [name])

  const handleSubmitForm = (event) => {
    event.preventDefault()
    alert("name: " + name + password + username)
    setIsAlertVisible(true)
    setName("")
    setPassword("")
    setUsername("")
  }

  const handleReset = () => {
    setIsAlertVisible(false)
    setName("")
    setPassword("")
    setUsername("")
  }

  return (
    <>
      <h1>Login:</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>
              Name: <br />
              <input type="text" name="ime" value={name} onChange={handleNameChange}/>
          </label>
        </div>
        <div>
          <label> 
              Password: <br />
              <input type="password" name="password" value={password} onChange={handlePasswordChange}/>
          </label>
        </div>

        <div>
          <label>
            Username: <br />
            <input type="text" name="username" value={username} onChange={handleUsernameChange} />
          </label>
        </div>
        <input type="submit" value="Potvrdi" />
        {isAlertVisibile && (
          <button onClick={handleReset}>Reset</button>
        )}
      </form>
    </>
  )
}

export default App
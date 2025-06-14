import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../../Context/UserContext'
function Login() {
    const [username, setUsername]= useState('')
    const [password, setPassword]= useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit =(e) =>{
    e.preventDefault()
    setUser({username, password})
    }
  return (
    <div>
      <h2>Login</h2>
      <input value={username} onChange={(e) =>{setUsername(e.target.value)}} type='text' placeholder='Username'></input>
            <input style={{marginLeft:10}} value={password} onChange={(e) =>{setPassword(e.target.value)}} type='password' placeholder='Password'></input>
            <button onClick={handleSubmit}>Submit</button>

    </div>
  )
}

export default Login

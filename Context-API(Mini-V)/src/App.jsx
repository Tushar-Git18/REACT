import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './Components/Login/Login'
import Profile from './Components/Profile/Profile'
function App() {

  return (
    <UserContextProvider>
      <h1>REACT CONTEXT-API LOGIN PORTAL</h1>
      <Login></Login>
      <Profile></Profile>

    </UserContextProvider>
  )
}

export default App

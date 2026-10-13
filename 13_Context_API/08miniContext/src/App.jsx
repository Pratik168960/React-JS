import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    // Wrapping the components inside the Provider ensures Login and Profile share the exact same context state
    <UserContextProvider>
      <h1>React with Chai and Share</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
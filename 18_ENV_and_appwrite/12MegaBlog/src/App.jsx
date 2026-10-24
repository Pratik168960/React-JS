import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  // Set loading to true immediately because we are going to make a network request to Appwrite on mount
  const [loading, setLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    // Check if the user has an active session
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        // If Appwrite returns user data, dispatch login to Redux
        dispatch(login({userData}))
      } else {
        // If no user data, dispatch logout to ensure Redux state is accurate
        dispatch(logout())
      }
    })
    // .catch((error) => console.log(error)) // Optional: Catch any errors
    .finally(() => setLoading(false)) // Finally block always runs when the promise settles
  }, [])
  
  // Conditional Rendering: If NOT loading, show the UI. If loading, show null (or a spinner)
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
        {/*  NOTE: Outlet will render dynamic routes later once React Router is configured */}
        <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
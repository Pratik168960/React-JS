/* eslint-disable react-hooks/set-state-in-effect */
import React, {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

// NOTE: This is a protection mechanism for our routes.
// We wrap our pages in this component. It determines whether to render the page (children) or redirect the user.
export default function Protected({children, authentication = true}) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)
    
    // Grab the current authentication status from the global Redux store
    const authStatus = useSelector(state => state.auth.status)

    useEffect(() => {
        // NOTE: The core logic for route protection.
        // Let's break down the complex if/else condition wrote:
        
        // Scenario 1: The page requires auth (authentication = true) BUT the user is NOT logged in (authStatus = false).
        // Result: Redirect them to the /login page.
        if (authentication && authStatus !== authentication) {
            navigate("/login")
        } 
        // Scenario 2: The page does NOT require auth (e.g., the Login or Signup page -> authentication = false) 
        // BUT the user IS already logged in (authStatus = true).
        // Result: Redirect them to the home page (/) because they don't need to log in again.
        else if (!authentication && authStatus !== authentication) {
            navigate("/")
        }
        
        // Once the check is complete, remove the loading state to render the actual content.
        setLoader(false)
    }, [authStatus, navigate, authentication])

  return loader ? <h1>Loading...</h1> : <>{children}</>
}
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github, { githubInfoLoader } from './components/Github/Github.jsx'

/* 
// STEP 1 (Removed): The Array of Objects approach for routing.
// Some developers prefer this, but it can get visually complex with deep nesting.
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      { path: "", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> }
    ]
  }
])
*/

// FINAL CODE: The JSX approach using createRoutesFromElements. 
// Highly readable and preferred for nested routes[cite: 5].
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      
      {/* TUTOR IMPORTANT NOTE: Dynamic parameter capture using :userid[cite: 5] */}
      <Route path='user/:userid' element={<User />} />
      
      {/* TUTOR IMPORTANT NOTE: Using the loader for optimized API fetching[cite: 5] */}
      <Route 
      loader={githubInfoLoader}
      path='github' 
      element={<Github />}
       />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
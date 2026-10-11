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
// STEP 1 (Removed): The Array of Objects approach for routing
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

// FINAL CODE: The JSX approach using createRoutesFromElements (Tutor's preferred, more readable syntax)
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      
      {/* NOTE: Capture dynamic parameters from the URL using :userid */}
      <Route path='user/:userid' element={<User />} />
      
      {/* NOTE: Use the loader property to highly optimize API data fetching */}
      <Route 
        loader={githubInfoLoader} // if we have to fetch some data  from any api or from database anything so we can directly do api calls from here data fetching gets started before the useEffect as our cursor goes on it before clicking it and store it in cache 
        path='github' 
        element={<Github />}
      />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* RouterProvider takes control of the app injection here, replacing the standard <App /> */}
    <RouterProvider router={router} />
    {/* router provider is a wrapper where we have wrapped every route */}
  </React.StrictMode>,
)
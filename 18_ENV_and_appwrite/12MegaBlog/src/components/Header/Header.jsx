import React from 'react'
import {Container, Logo, LogoutBtn} from '../index'
import { Link } from 'react-router-dom'
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  // Check the global Redux state to see if the user is authenticated
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  // NOTE: In production apps, navigation links are often stored in an array of objects. 
  // This makes adding/removing links much easier (just add a new object).
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus, // Only show Login if NOT authenticated
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus, // Only show Signup if NOT authenticated
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus, // Only show if authenticated
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus, // Only show if authenticated
  },
  ]


  return (
    <header className='py-3 shadow bg-gray-500'>
      <Container>
        <nav className='flex'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px'   />
              </Link>
          </div>
          <ul className='flex ml-auto'>
            {/* Loop over the navItems array */}
            {navItems.map((item) => 
            item.active ? (
              <li key={item.name}>
                <button
                onClick={() => navigate(item.slug)}
                className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                >{item.name}</button>
              </li>
            ) : null
            )}

            {/* Conditionally render the Logout button if the user is logged in */}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
        </Container>
    </header>
  )
}

export default Header
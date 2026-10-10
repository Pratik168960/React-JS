import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    {/* TUTOR IMPORTANT NOTE: Outlet acts as a dynamic placeholder for nested routes like Home, About, Contact[cite: 5]. */}
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout
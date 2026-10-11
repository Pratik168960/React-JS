
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      {/* NOTE: Outlet acts as a dynamic placeholder where nested routes render without reloading the Header/Footer*/}
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout
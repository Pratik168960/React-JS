import React from 'react'
import { Signup as SignupComponent } from '../components'

function Signup() {
  return (
    <div className='py-8'>
        {/* NOTE: We import the Signup component and alias it as SignupComponent to avoid naming conflicts with the page itself. */}
        <SignupComponent />
    </div>
  )
}

export default Signup
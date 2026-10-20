import React from 'react'

// NOTE: The Container's only job is to wrap content and provide consistent width/alignment across the entire app
function Container({children}) {
  return <div className='w-full max-w-7xl mx-auto px-4'>{children}</div>;
}

export default Container

import Car from "./car"


function App() {

  // 1. A standard JavaScript variable
  const year = "2003"

  
  return (
    <>
      <Car />
      <h3>Porsche</h3>
      <p>911 GT3 RS</p>
      {/* 2. INJECTING VARIABLES:
          The {username} is called an "evaluated expression".
          You can ONLY write the final evaluated outcome inside these braces. 
      */}
      <p>year: {year}</p>

    </>
    
  )
}

export default App

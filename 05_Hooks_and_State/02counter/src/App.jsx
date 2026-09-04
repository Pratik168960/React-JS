import { useState } from 'react'

function App() {
  /*
   * REACT HOOKS (useState):
   * Why we need this: A standard let variable (e.g., let counter = 15) updates in memory, 
   * but React does not automatically sync those changes to the Virtual DOM (UI)[cite: 5].
   * 
   * The useState hook tells React to track this specific data. 
   * It returns an array containing two things:
   * 1. The variable itself (counter)
   * 2. A specific function (setCounter) responsible for updating that variable and triggering a UI re-render[cite: 5].
   */
  const [counter, setCounter] = useState(15)

  // Function to increase the counter[cite: 5]
  const addValue = () => {
    // ASSIGNMENT LOGIC: Prevent the counter from exceeding 20[cite: 5].
    if (counter < 20) {
      setCounter(counter + 1)
    }
  }

  // Function to decrease the counter[cite: 5]
  const removeValue = () => {
    // ASSIGNMENT LOGIC: Prevent the counter from dropping below 0[cite: 5].
    if (counter > 0) {
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>Cars</h1>
      
      {/* 
        React automatically updates this value everywhere it is used in the DOM 
        the moment setCounter() is called[cite: 5].
      */}
      <h2>Counter value: {counter}</h2>

      {/* 
        We pass the function *reference* (addValue) to onClick, not the executed function (addValue())[cite: 5].
      */}
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
      
      {/* Proving state updates everywhere it is referenced[cite: 5] */}
      <p>footer: {counter}</p>
    </>
  )
}

export default App
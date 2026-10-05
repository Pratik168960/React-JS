import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // STEP 1: Setting up all required state variables
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // STEP 4: Creating a reference for the password input field to manage selection
  const passwordRef = useRef(null)

  // STEP 2: Creating the password generator function and memoizing it with useCallback
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // STEP 2.1 (Removed): pass = str.charAt(char) -> This overwrote the string every loop
      // FINAL CODE: Append the character to the pass string
      pass += str.charAt(char)
    }
    
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword]) // dependencies are for method optimization these are responsible for memoization keep in memory cache 

  // STEP 5: Creating the copy to clipboard function, memoized with useCallback
  // another big challenge to face is how we would know to copy the desired text as button and input does not have any relation between them here we have to use reference hook useRef
  
  const copyPasswordToClipboard = useCallback(() => {
    // Optional chaining to safely access current reference
    // for good ui user must know what is copied 
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 999); // Limiting selection range as best practice
    window.navigator.clipboard.writeText(password)
  }, [password])

  // STEP 3: Using useEffect to call the generator function on initial load and whenever dependencies change
  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  passwordGenerator()
}, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    // STEP 6: Building the Tailwind UI
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // Attaching the useRef hook here
        />
        <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 hover:bg-blue-800'
        >
            copy
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>
        {/* Length Slider */}
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}} // Capturing slider value
          />
          <label>Length: {length}</label>
        </div>
        
        {/* Numbers Checkbox */}
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                  // Flipping previous state
                  setNumberAllowed((prev) => !prev);
              }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        
        {/* Characters Checkbox */}
        <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  // Flipping previous state
                  setCharAllowed((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
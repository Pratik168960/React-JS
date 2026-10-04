import { useState } from "react"
// STEP 1 (Removed): Default Vite imports
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  // STEP 2 (Removed): Default Vite state
  // const [count, setCount] = useState(0)

  // FINAL CODE: Initializing our color state with a default value of "olive"
  const [color, setColor] = useState("olive")

  return (
    // STEP 3 (Removed): Default Vite JSX structure
    // <>
    //   <div>...</div>
    //   <h1>Vite + React</h1>
    //   <div className="card">...</div>
    // </>

    // FINAL CODE: Background Changer UI
    // Applying standard Tailwind classes for full screen width/height, and inline styles for 
    // the dynamic background color.
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      {/* Bottom Bar Container */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        
        {/* Inner White Bar for Buttons */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 
        rounded-3xl">
          
          {/* STEP 4 (Removed): Incorrect onClick Implementation */}
          {/* If we write onClick={setColor("red")}, the function executes immediately on render 
          rather than waiting for a click. */}
          {/* <button onClick={setColor("red")} className="outline-none px-4 py-1 rounded-full 
          text-white shadow-lg" style={{ backgroundColor: "red" }}>Red</button> */}

          {/* FINAL CODE: Correct onClick Implementation using a Callback */}
          <button
            onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          
          <button
            onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setColor("grey")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}
          >
            Grey
          </button>
          <button
            onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setColor("pink")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "pink" }}
          >
            Pink
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
          <button
            onClick={() => setColor("lavender")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "lavender" }}
          >
            Lavender
          </button>
          <button
            onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>

        </div>
      </div>
    </div>
  )
}

export default App
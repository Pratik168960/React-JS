import './App.css'
// Imported the new Card component
import Card from './components/Card'

function App() {
  // STEP 3 (Removed): Experimenting with passing variables, arrays, and objects
  // let myObj = {
  //   username: "Pratik",
  //   age: 20
  // }
  // let newArr = [1, 2, 3]

  return (
    <>
      {/* STEP 1 (Removed): Initial Tailwind test without rounded corners */}
      {/* <h1 className='bg-green-400 text-black p-4'>Tailwind test</h1> */}
      
      {/* FINAL CODE: Styled h1 testing Tailwind compilation */}
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      
      {/* STEP 2 (Removed): Hardcoded Card HTML pasted directly inside App.jsx before extracting it to Card.jsx */}
      {/* <div className="relative h-[400px] w-[300px] rounded-md"> ... </div> */}

      {/* STEP 3 (Removed): Passing objects and arrays to test React prop handling */}
      {/* <Card channel="Pratik" someObj={myObj} someArr={newArr} /> */}

      {/* FINAL CODE: Reusing the Card component and passing different props */}
      <Card username="Pratik" btnText="click me" />
      
      {/* This card relies on the default btnText ("visit me") defined in Card.jsx */}
      <Card username="Chloe" />
    </>
  )
}

export default App
/* eslint-disable react-hooks/set-state-in-effect */
import { useState, useEffect } from 'react'
import {TodoProvider} from './contexts'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  // Initialize state with an empty array as fallback if not empty array it will be null then error 
  const [todos, setTodos] = useState([])
  // todos here is array 

  /*
  // STEP 1 (Removed): Initial empty function definitions defined to match the Context
  const addTodo = (todo) => {}
  const updateTodo = (id, todo) => {}
  const deleteTodo = (id) => {}
  const toggleComplete = (id) => {}
  */

  // FINAL CODE: Fully implemented business logic

  const addTodo = (todo) => {
    // NOTE: Use the callback version of set state to get access to the previous array same as the interview question which we have discussed for the counter project 
    // We generate a unique ID using Date.now() and spread the incoming todo object ... destructure classic js concept 
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    // Loop through the previous todos. If the ID matches, replace it with the new todo object; otherwise, keep the old one. every todo is object and every object has id 
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
  }

  const deleteTodo = (id) => {
    // Filter out the todo that matches the ID we want to delete for example if there is old array and we have to place elements in new array which does not have todo.id equal to the id 
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    // Loop through and find the ID. When found, spread the existing properties and invert the 'completed' boolean 
    // ...prevTodo used for getting all the values from the TodoContext.jsx
    // todos: [
    //     {
    //         id: 1,
    //         todo: " Todo msg",
    //         completed: false,
    //     }
    // ], and changing one property that is completed overwriting it 
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, completed: !prevTodo.completed } : prevTodo))
  }



  // LOCAL STORAGE 
  // NOTE: First useEffect is used to LOAD data from local storage on component mount
  useEffect(() => {
    // Retrieve strings from local storage and parse them back into JSON
    const todos = JSON.parse(localStorage.getItem("todos"))

    // If todos exist and the array is not empty, set the state
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])



  // NOTE: Second useEffect is used to SAVE data to local storage whenever the 'todos' state changes
  useEffect(() => {
    // Convert the JavaScript array to a string to save it
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    // Wrap everything in TodoProvider and pass the state and functions into the value prop so all children can access them
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm /> {/*call*/}
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/* Loop and Add TodoItem here */}
                        {/* NOTE: Always use keys inside loops in React to improve performance */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}


export default App
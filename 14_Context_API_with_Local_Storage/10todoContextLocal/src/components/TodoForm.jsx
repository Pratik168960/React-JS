import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoForm() {
    const [todo, setTodo] = useState("")
    
    // Extract the addTodo method from our custom context hook (App.jsx)
    const {addTodo} = useTodo()

    const add = (e) => {
    
      // Prevent default form submission
      e.preventDefault()

      // If the input is empty, do nothing
      if (!todo) return

      // Pass the todo text to the global method. We default 'completed' to false
      addTodo({ todo, completed: false})
      
      // Clear the input field after submission
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              // Wiring the input field directly to our local state
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;
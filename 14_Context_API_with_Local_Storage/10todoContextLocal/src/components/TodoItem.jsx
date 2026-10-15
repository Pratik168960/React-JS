import React, { useState } from 'react'
import { useTodo } from '../contexts/TodoContext';

function TodoItem({ todo }) {
  // Local state to track if the current item is in edit mode
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  
  // Local state to bind to the input field while editing
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  
  // Extracting necessary methods from the global context
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    // Pass the updated message back up to the main App.jsx logic
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted = () => {
    // Call the global context method to flip the boolean
    toggleComplete(todo.id) // togglemethod is from context 
  }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              // NOTE: Applying the line-through CSS if the item is marked complete
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              // Set field to read-only unless the user clicks the edit button
              readOnly={!isTodoEditable}
              onChange={(e) => setTodoMsg(e.target.value)}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else {
                      setIsTodoEditable((prev) => !prev);
                  }
              }}
              disabled={todo.completed}
          >
              {/* Show Save icon if editable, else show Edit icon */}
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
import {createContext, useContext} from "react"

// NOTE: Define the default shape of the context. This includes the initial state array and the empty placeholder methods
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    // These are just definitions; the actual functionality is written in App.jsx
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})

// NOTE: Export the custom hook so components can easily grab context values without importing useContext manually everywhere
export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
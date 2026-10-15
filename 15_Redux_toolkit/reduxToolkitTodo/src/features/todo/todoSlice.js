import {createSlice, nanoid } from '@reduxjs/toolkit';

// NOTE: Setting the initial state for the store. We provide an array with one default object
const initialState = {
    todos: [{id: 1, text: "Hello world"}]
}

// NOTE: createSlice requires a name, an initialState, and an object of reducers
export const todoSlice = createSlice({
    name: 'todo',
    initialState, 
    reducers: {
        // ALWAYS REMEMBER: Reducers always get access to (state, action)
        addTodo: (state, action) => { // we get updates state value in the store 
            const todo = {
                // nanoid is a built-in RTK utility to generate unique IDs
                id: nanoid(), 
                // action.payload contains the data sent from the dispatching component
                text: action.payload
            }
            // NOTE: In classic Redux, we had to spread previous states. 
            // In RTK, we can simply push to the array. RTK handles immutability behind the scenes
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            // Overwrite the current todos array by filtering out the ID that matches the action.payload. filter only the true values 
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
        
        
        // ASSIGNMENT: Update Todo Logic
        updateTodo: (state, action) => {
            // Find the exact todo matching action.payload.id, and overwrite its text property
            state.todos = state.todos.map((todo) => 
                todo.id === action.payload.id ? { ...todo, text: action.payload.text } : todo
            )
        }
        
    }
})

// NOTE: We must export two things.
// 1. Export the functionality / individual reducers (actions) so our components can use them via useDispatch
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// 2. Export the main reducer so the Store can register it and maintain awareness of this slice
export default todoSlice.reducer
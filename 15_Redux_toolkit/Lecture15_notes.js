/*
        LECTURE 15: REDUX & REDUX TOOLKIT (RTK) CRASH COURSE

THE GOAL:
- Understand the history, architecture, and modern implementation of Redux using Redux Toolkit (RTK) to manage global state.
- Build a Todo application to master `useSelector` and `useDispatch`.

CORE CONCEPTS & HISTORY:
1. What is Redux?
   - Redux is NOT proprietary to React. It is an independent library ("A Predictable State Container for JS Apps") that works with React, Vue, and vanilla JavaScript.
   - It enforces a strict, directional flow of data to prevent messy prop-drilling in complex applications.

2. Redux Core vs. Redux Toolkit (RTK):
   - Classic Redux was highly verbose, requiring manual store configuration, complex middleware setups, and cumbersome immutable state updates (spreading previous states manually)
   - Redux Toolkit (RTK) was introduced by the official Redux team as the modern, standard, and opinionated way to write Redux RTK abstracts away the complex boilerplate and includes built-in middlewares

3. The Store:
   - The Store is the single source of truth—the grand global variable
   - It is highly restrictive: the Store does not accept data from just anyone. It only takes updates from registered "Reducers"

4. Slices & Reducers:
   - A "Slice" is a modern RTK term for a modular piece of the Redux store (e.g., a Todo slice, an Auth slice)
   - Unlike the Context API where we only defined method names and wrote the logic later, in Redux, the actual business logic (how state changes) is written directly inside the Reducers
   - Every Reducer automatically receives two parameters: `(state, action)`
     * `state`: Gives you access to the current values in the store
     * `action`: Contains the data passed from the component (accessible via `action.payload`)

5. Mutating State (The Immer.js Magic):
   - In Classic Redux (and Context API), you had to spread the previous state to preserve it before adding new data
   - In RTK, you can directly mutate the state (e.g., `state.todos.push()`). Under the hood, RTK uses a library called Immer.js to safely translate these direct mutations into immutable updates

6. The Hooks (`useSelector` & `useDispatch`):
   - `useSelector`: Used to select and read data FROM the store
   - `useDispatch`: Used to send data TO the store by dispatching an action/reducer
*/
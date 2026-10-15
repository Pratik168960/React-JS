/*
        LECTURE 14: TO-DO APP WITH CONTEXT API & LOCAL STORAGE

THE GOAL:
- Build a fully functional Todo application utilizing Context API for state management and Local Storage for data persistence.

CORE CONCEPTS:
1. Context API Setup:
   - We define our global context (`TodoContext`) with default values, including a `todos` array and placeholder methods (`addTodo`, `updateTodo`, `deleteTodo`, `toggleComplete`).
   - We export a custom hook `useTodo` to make consuming the context easier

2. Defining Functionality in App.jsx:
   - While the Context holds the names of the methods, the actual business logic (what those methods do) is written inside `App.jsx` where the Provider wraps the app
   - We use the spread operator (`...`) extensively to preserve previous state arrays and objects while injecting new values

3. Local Storage:
   - Local storage stores data strictly as Strings
   - When retrieving data: `JSON.parse(localStorage.getItem("todos"))` converts the string back into a JavaScript array/object
   - When saving data: `JSON.stringify(todos)` converts the JavaScript array into a string before setting it in local storage
   - We use two `useEffect` hooks: one to load the todos on initial render, and another that triggers every time the `todos` state changes to save them to local storage

4. Component Architecture:
   - We use an `index.js` file inside our `contexts` and `components` folders to cleanly export all files, minimizing clutter in import statements
*/
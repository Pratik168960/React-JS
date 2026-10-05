/*
        LECTURE 10: PASSWORD GENERATOR PROJECT

THE GOAL:
- Build a Password Generator to understand how to handle complex state dependencies, 
memoization, and direct DOM references using advanced React Hooks.

CORE HOOKS INTRODUCED:
1. `useCallback`: 
   - Used for memoization (caching a function definition between re-renders).
   - Syntax: `useCallback(fn, dependencies)`.
   - We pass `setPassword` into the dependency array not to re-run the function, but to keep 
   the function reference optimized in the cache
   
2. `useEffect`:
   - Used to synchronize a component with an external system or trigger actions side-effects 
   when dependencies change
   - Syntax: `useEffect(fn, dependencies)`
   - If any value in the dependency array (`length`, `numberAllowed`, `charAllowed`) changes, 
   the effect runs again, automatically generating a new password

3. `useRef`:
   - Used to take a direct reference to a DOM element (like an input field) without triggering 
   re-renders
   - We use it to highlight/select the password text when the user clicks the "copy" button, 
   providing better UI feedback

PRACTICAL CONCEPTS:
- Event Handling with Callbacks: For checkboxes, using `onChange={() => setNumberAllowed((prev) => !prev)}` 
ensures we always toggle based on the most recent previous state
- Clipboard API: Using `window.navigator.clipboard.writeText()` to copy text to the system clipboard
*/
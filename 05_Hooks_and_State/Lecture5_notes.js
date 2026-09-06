/*

        LECTURE 5: STATE, HOOKS & UI UPDATION


THE GOAL:
- Understand why standard JavaScript variables fail to update the browser UI 
  and learn how to use React Hooks to manage state


THE APPROACH (Why React Needs State):
- Standard Variables: Variables update perfectly fine in memory, 
but React does not automatically sync those changes to the browser UI
- React's Control: React strictly controls all UI updates To trigger a UI re-render, 
you must use React's specialized methods called Hooks
- Invisible Scripts: Transpilers like Babel work behind the scenes to parse this React 
logic and inject it into standard JavaScript that the browser can execute


COMPONENT RULES & BEST PRACTICES (useState Hook):
- The Hook: `useState` is a special utility method imported directly from the core 'react' library
- Default Value: It expects a default starting value (e.g., 15), which can be any data type
- Return Value: It returns an array containing exactly two items: the current state variable 
and a dedicated function responsible for updating that variable
- Array Destructuring: This is conventionally destructured as `const [counter, setCounter] = useState(15)`
- UI Propagation: When the updater function (e.g., `setCounter`) is executed, 
React automatically analyzes the DOM and updates the value everywhere it is referenced simultaneously

*/
/*
        LECTURE 9: BACKGROUND CHANGER PROJECT

THE GOAL:
- Build a background color changing application to solidify confidence in using React State 
(`useState`) and Tailwind CSS.

THE APPROACH (State & Inline Styles):
- State Initialization: Use `const [color, setColor] = useState("olive")` to track the current 
background color, setting a default starting value of "olive".
- Inline Styling: Apply the state variable directly to the main container using React's inline 
style syntax: `style={{backgroundColor: color}}`. Notice that inline CSS properties in React 
use camelCase.
- Tailwind Integration: Combine inline styles for dynamic variables with standard Tailwind 
utility classes for structural styling

THE CORE CONCEPT (Event Handling in React):
- The `onClick` attribute strictly requires a function reference, not a function's executed 
return value
- Incorrect Implementation: `onClick={setColor('red')}`. This immediately executes the function 
the moment the component renders.
- Correct Implementation: `onClick={() => setColor('red')}`. By wrapping the state update inside 
an arrow function (a callback), you pass a function reference that React will only execute when 
the button is actively clicked
*/
/*

        LECTURE 3: REACT INTERNAL FLOW & CUSTOM COMPONENTS


THE GOAL:
- Understand how React injects JavaScript into a static HTML page 
  and learn the rules for creating custom reusable components.


THE APPROACH (How React Works Under the Hood):
- Single Page Application (SPA): The entire application runs inside 
  a single `<div id="root"></div>` located in 'index.html'.
- The Injection Point: In 'main.jsx' (or index.js), React uses 
  'ReactDOM.createRoot()' to target this root div, and then uses 
  '.render()' to inject the React components into the DOM
- Invisible Scripts: You do not need to manually link your JavaScript 
  files in the HTML. The bundler (like Vite) injects the compiled 
  scripts automatically during runtime or build time


COMPONENT RULES & BEST PRACTICES:
- What is a Component: It is simply a JavaScript function that 
  returns HTML (JSX) and is exported for use in other files
- Capitalization: Component function names MUST start with an 
  uppercase letter (e.g., 'Chai', not 'chai') to be recognized
- File Extensions: When using Vite, any file containing JSX must 
  explicitly use the '.jsx' extension, not just '.js'
- The Fragment Rule: A component can only return a single parent 
  element If you need to return multiple tags, wrap them in 
  an empty fragment: `<> ... </>`
 */
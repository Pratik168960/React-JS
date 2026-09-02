/*

        LECTURE 4: CUSTOM REACT & JSX UNDER THE HOOD


THE GOAL:
- Build a custom React renderer to understand how JSX is parsed 
  into a tree structure and injected into the HTML DOM.

HOW JSX WORKS BEHIND THE SCENES:
- Browsers do not understand JSX. A transpiler/bundler (like Babel) 
  parses the HTML-like syntax and converts it into a JavaScript 
  object tree (using React.createElement) containing the element's 
  'type', 'props' (attributes), and 'children'
- The Render Process: React takes this parsed object, creates a 
  real DOM element using standard JavaScript (document.createElement), 
  loops through and sets its attributes (setAttribute), and finally 
  appends it to the main root container (appendChild)

EVALUATED EXPRESSIONS IN JSX:
- When injecting JavaScript variables into JSX using curly braces 
  (e.g., {username}), it is called an "evaluated expression"
- The Rule: You can only inject the *final outcome* (the evaluated 
  result) into these braces, not complete JavaScript logic like 
  if/else statements or for-loops
- Why?: Because under the hood, that variable is being injected 
  directly as a value inside a JavaScript object, and standard 
  JavaScript objects do not support conditional logic statements 
  inside their key-value declarations
 */
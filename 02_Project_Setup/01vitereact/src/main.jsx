import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* 
EXPERIMENT 1: LOCAL FUNCTION COMPONENT
You can declare a componen  t right here. It is just a JavaScript function 
returning JSX (HTML)
 */
function MyApp() {
    return (
        <div>
            <h1>Custom App | App1</h1>
        </div>
    )
}

/* 
EXPERIMENT 2: DIRECT JSX ELEMENT
This is standard JSX. Behind the scenes, the bundler parses this 
and converts it into a React tree object automatically
 */
const anotherElement = (
    <a href="https://google.com" target="_blank">Visit google</a>
)

/* 
EXPERIMENT 3: VARIABLE INJECTION
This is an evaluated expression. It represents the final outcome 
that will be injected at the end of the element tree
 */
const anotherUser = "pat"

/* 
EXPERIMENT 4: THE CORE REACT SYNTAX
This is the exact object structure your bundler generates under the hood
It takes strictly ordered parameters:
1. Tag ('a')
2. Props/Attributes ({href, target})
3. Children ('click me...')
4. Evaluated Expressions (anotherUser)[cite: 2]
 */
const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'click me to visit google ',
    anotherUser
)

// THE INJECTION POINT (Targeting index.html's <div id="root">)
ReactDOM.createRoot(document.getElementById('root')).render(
    
    /* 
    TEST THEM ALL (Uncomment one at a time to test in browser):
    
    <MyApp />        // Standard component rendering
    MyApp()          // Works because React components are just standard JS functions
    anotherElement   // Renders the raw JSX object directly
     */
    
    // We leave this active to prove React's core element compilation works
    reactElement
)
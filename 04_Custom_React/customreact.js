

/*
1. THE CUSTOM RENDERER ENGINE
This function mimics what React's actual ReactDOM.createRoot().render() does under the hood.
*/

function customRender(renderElement, container) {
    /*
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)
    container.appendChild(domElement)


    Use of setAttribute multiple times so we can replace it with the for loop
    */
    
    /*
    STEP A: Create the actual DOM element
    We use standard JavaScript to create an element based on the 'type' property (e.g., 'a', 'div', 'p').
    */
    const domElement = document.createElement(reactElement.type)
    
    /*
    STEP B: Inject the content (children)
    The 'children' property contains the text we want to display inside our HTML tag
    */
    domElement.innerHTML = reactElement.children


    /*
    STEP C: Loop through and set all attributes dynamically
    Instead of hardcoding 'href' or 'target', we loop through the 'props' object
    This modular approach ensures any attribute passed in gets applied to the element automatically
    */
    for (const prop in reactElement.props) {
       
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])
        
    }


    /*
    STEP D: Mount the element to the actual webpage
    We append our newly constructed and populated element into the root container
    */
    container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit Google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)
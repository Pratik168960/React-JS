/*

        LECTURE 7: TAILWIND CSS AND PROPS


THE GOAL:
- Configure Tailwind CSS within a Vite React project and understand how to pass dynamic 
data to reusable components using Props


THE APPROACH (Tailwind Integration):
- Tailwind Setup: Tailwind is a utility-first CSS framework It is installed alongside
dependencies like postcss and autoprefixer
- Configuration: The `tailwind.config.js` file must be updated in the `content` array to include 
paths to your HTML and JSX files so Tailwind knows where to look for your CSS classes
- Injection: Tailwind directives are added to the top of your main `index.css` file
- JSX Syntax: In React (JSX), standard HTML `class` attributes must be written as `className` 
to apply Tailwind utilities


PRACTICAL STEPS & COMMANDS (From the Lecture):
- Note: These commands were done at the time of v3. Tailwind v4 removes the configuration files, 
so we specify version 3 to match the lecture exactly.
- 1. Create Project: Generate the Vite project named "03tailwindprops" and run `npm install`
- 2. Install Tailwind: Run `npm install -D tailwindcss@3 postcss autoprefixer` to add Tailwind 
and its peer dependencies.
- 3. Init Config: Run `npx tailwindcss init -p` to generate the `tailwind.config.js` and PostCSS 
configuration files
- 4. Update Config: Modify the `content` array in `tailwind.config.js` to include `"./index.html"` 
and `"./src/ ** /*.{js,ts,jsx,tsx}"` (Note: remove the spaces around the asterisks in your actual 
config file; they are added here to prevent breaking the JS block comment).
- 5. Inject CSS: Open `src/index.css` and add the Tailwind directives at the very top
- 6. Create Component: Create a `components` folder and add a `Card.jsx` file to hold the reusable Tailwind UI.
- 7. Fix JSX Rules: Convert all standard HTML `class` attributes to `className` and ensure 
empty tags (like `<img>`) are explicitly closed


COMPONENT RULES & BEST PRACTICES (Props & Reusability):
- Component Reusability: React allows you to isolate UI elements (like a Card) into separate 
components, making them reusable across your application
- What are Props: Props (short for properties) are used to pass data from a parent component 
down to a child component
- Passing Data: You can pass strings, arrays, or objects as variables to a component 
(e.g., `<Card channel="chai aur code" />`)
- Accessing Props: A component function receives a `props` object You can access data 
using `props.propertyName` or by destructuring the object directly in the function parameters
- Default Values: You can assign default values to props during destructuring 
(e.g., assigning "visit me" as a default button text) to ensure the component functions correctly 
even if the parent fails to pass that specific piece of data

*/
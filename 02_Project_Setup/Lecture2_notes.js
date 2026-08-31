/*

        LECTURE 2: CREATE REACT PROJECT & FILE STRUCTURE


THE GOAL:
- Set up the development environment, create React projects using 
  both classic and modern tools, and understand the core file structure

CORE CONCEPTS & TOOLS:
- Required Tools: A code editor like VS Code and Node.js to provide 
  the runtime environment and package managers (npm/npx)
- React Core vs. DOM: 'React' is the core foundational library, while 'React DOM' 
  is the specific add-on required for building web applications 
  (whereas React Native is used for mobile)
- Official Documentation: Always refer to the modern 'react.dev' site 
  rather than older legacy documentation pages

CREATING A PROJECT (Two Methods):
- Method 1 (Classic): 'npx create-react-app <name>' uses a bulky 
  utility that installs a massive 'node_modules' folder, performance trackers, 
  and testing libraries by default, making it very slow
- Method 2 (Modern): 'npm create vite@latest <name>' uses the Vite 
  bundler It is significantly faster, lightweight, and requires 
  you to manually run 'npm install' to fetch the node modules afterward

FILE STRUCTURE & SCRIPTS:
- 'package.json': The primary entry point to understand any project, containing 
  dependencies, versions, and execution scripts like 'start', 'build', or 'dev'
- 'src/' Folder: This is where you write your components and spend most 
  of your time coding It is best practice to clean this folder by 
  deleting unnecessary logos and default CSS files when starting
- Build Process: Browsers only understand standard HTML, CSS, and JS, not React 
  Running a build script (npm run build) converts React code into a 'build' folder 
  filled with optimized static assets ready for production deployment
*/
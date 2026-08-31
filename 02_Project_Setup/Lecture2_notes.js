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
Method 1: The Classic Way (create-react-app)
- Command: npx create-react-app 01basicreact
- Run: cd 01basicreact -> npm run start
- Note: This utility is bulky, time-consuming, and installs 
   heavy, unnecessary testing libraries by default.

Method 2: The Modern Way (Vite)
- Command: npm create vite@latest
- Prompts: Name it '01vitereact', select 'React', select 'JavaScript'.
- Run: cd 01vitereact -> npm install -> npm run dev
- Note: A lightning-fast bundler that generates a lightweight 
   environment without pre-installing node_modules

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
/*
        LECTURE 16: MEGA PROJECT TECH STACK DECODE (THEORY & ARCHITECTURE)

THE GOAL:
- Decode the exact architecture, third-party services, and libraries required to build a production-grade Mega Blog Project in React.
- Understand the limitations of React as a purely frontend library and how to bridge those gaps using external services

GOLDEN RULE FOR THE MEGA PROJECT:
- Do not code along blindly on the first watch. Watch the entire video first to build confidence and understand the flow, then watch it again and code along

CORE CONCEPTS & TECH STACK CHOSEN:

1. React's Limitation & The Need for a Backend:
   - React is strictly a frontend library. It does not natively handle databases, authentication (login/signup), or authorization
   - If we were to build a custom backend from scratch (e.g., Node/Express/MongoDB), the project scope would become too massive
   - SOLUTION: We will use a Backend-as-a-Service (BaaS)

2. Appwrite (The Chosen BaaS):
   - The tutor chose Appwrite because it is a free, open-source BaaS that is cross-platform (Mac, Linux, Windows)
   - It will handle our user authentication, document storage (blog posts), and file storage (images)

3. Handling Complex UI Challenges:
   - Challenge 1: Image Uploads & Previews. We need to handle uploading original images to the backend and displaying smaller preview versions on the home page
   - Challenge 2: Rich Text Formatting. Users need to write blogs with bold, italics, and lists. The backend will save these as HTML strings, and the frontend must render those strings back into actual UI elements safely

4. TinyMCE (Rich Text Editor):
   - We will use the TinyMCE React component for our text editor
   - It is an open-source rich text editor. We will read its documentation to configure features like bolding, italicizing, and colors

5. HTML React Parser:
   - Because our Rich Text Editor saves data as HTML strings (e.g., `<p>Hello World</p>`), we need a way to render it safely in React without exposing our app to cross-site scripting (XSS).
   - We will use the `html-react-parser` library to convert these HTML strings into actual React elements

6. React Hook Form:
   - Instead of managing every single input field with standard `useState` hooks (which can get messy and slow down the app), we will use `react-hook-form`
   - It provides better error handling, cleaner code, and high performance
   - Advanced Use Case: We will use it to actively monitor the "Title" input. As the user types the title, we will automatically generate a URL "Slug" in real-time (replacing spaces with dashes)

7. Environment Variables:
   - We will learn how to securely store sensitive API keys and project IDs using Environment Variables
   - The tutor will explain the difference between environment variables in classic Create React App vs. modern Vite setups, and how they behave in production environments

*/
/*
        LECTURE 18: ENV AND APPWRITE IN REACT PROJECT

THE GOAL:
- Initialize the Vite React application for our Mega Blog project (named `12MegaBlog`).
- Install all necessary third-party dependencies required for the project.
- Set up an Appwrite project and securely store its credentials using Environment Variables.
- Understand how to correctly configure and access Environment Variables in a Vite application.
- Build a production-grade configuration wrapper (`conf.js`) to guarantee type-safety and avoid unexpected crashes.

CORE CONCEPTS:

1. Project Initialization & Dependencies:
   - Scaffolded the app using `npm create vite@latest` with React and JavaScript (not TypeScript for this series).
   - Installed the core dependencies required: 
     `@reduxjs/toolkit`, `react-redux`, `react-router-dom`, `appwrite`, `@tinymce/tinymce-react`, `html-react-parser`, and `react-hook-form`.

2. Appwrite Configuration & Security:
   - Created a new project in the Appwrite Console (named "Chai Blog") and retrieved the API Endpoint and `Project ID`.
   - Created a Database named "blog" and retrieved its `Database ID`.
   - Inside the database, created a Collection named "articles" and retrieved its `Collection ID`.
   - TUTOR IMPORTANT NOTE: We navigated to the Collection settings and explicitly granted permissions so that only logged-in users (role: "Users") can Create, Read, Update, and Delete articles.
   - We manually defined the document attributes (schema) for our articles via the Appwrite GUI:
     - `title` (string, 255 chars, required)
     - `content` (string, required)
     - `featuredImage` (string, required)
     - `status` (string, 255 chars)
     - `userId` (string, required)
   - Created an Index on the `status` attribute (ascending) so we can filter active/inactive posts later.
   - Created a Storage Bucket named "images", retrieved its `Bucket ID`, and gave "Users" permission to read, create, and delete files.

3. Environment Variables in Vite:
   - Environment variables hide sensitive keys (like Appwrite IDs) from public repositories.
   - While Create React App uses `REACT_APP_` and `process.env`, Vite strictly requires all custom environment variables to start with the `VITE_` prefix.
   - In Vite, environment variables are accessed using `import.meta.env.VITE_VARIABLE_NAME`.
   - We create a `.env` file for our local secrets and a `.env.sample` file to push to GitHub as a template. The tutor emphasizes NEVER to commit the real `.env` file.

4. The Production-Grade Wrapper (conf.js):
   - Accessing `import.meta.env` directly throughout the app is a bad practice. If a variable fails to load, it can crash the application, and sometimes variables are misinterpreted as numbers instead of strings.
   - We created a centralized `conf.js` file to wrap all environment variables in `String()`. This guarantees type safety, centralizes our config, and makes swapping backend services much easier.
*/
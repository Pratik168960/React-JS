/*
        LECTURE 25: BUILDING PAGES & REACT ROUTER SETUP

THE GOAL:
- Separate our application into reusable `components` (buttons, inputs, forms) and `pages` (the actual views that assemble those components).
- Create all application views: `Home`, `Login`, `Signup`, `AddPost`, `AllPosts`, `EditPost`, and `Post`.
- Setup `react-router-dom` in `main.jsx` and implement route protection using our `AuthLayout` wrapper.

CORE CONCEPTS:
1. Pages vs. Components:
   - Components are small, reusable pieces of UI.
   - Pages are the actual screens rendered by the Router. A Page will import components (like `Container`, `PostCard`, `PostForm`) and assemble them into a full view.
   - This keeps `main.jsx` extremely clean because it only needs to import the Pages, not dozens of individual components.

2. Route Protection (AuthLayout in Action):
   - In `main.jsx`, we wrap routes with our `<AuthLayout>` (Protected) component.
   - For secure routes (e.g., `/add-post`), we pass `authentication={true}`. If a user isn't logged in, they get redirected.
   - For public routes (e.g., `/login`), we pass `authentication={false}`. If a logged-in user tries to visit the login page, they get redirected to the home page.

3. TUTOR IMPORTANT NOTE (The `<a>` tag vs `<Link>`):
   - CRITICAL RULE in React Routing: Never use standard HTML `<a>` tags for internal links. Clicking an `<a>` tag triggers a full page refresh, which destroys the React state and repaints the entire Virtual DOM from scratch.
   - Always use `<Link to="...">` from `react-router-dom`. It intercepts the click and dynamically swaps the components via the `<Outlet />` without reloading the page, preserving our application state (like Redux).

4. React Router Setup:
   - We use `createBrowserRouter` and pass an array of objects.
   - `<App />` is the main parent element. All our newly created pages are passed into its `children` array so they can be injected exactly where the `<Outlet />` is placed in `App.jsx`.
*/
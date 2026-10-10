/*
        LECTURE 12: REACT ROUTER DOM CRASH COURSE

THE GOAL:
- Build a multi-page routing experience (Home, About, Contact, User, Github) within a Single Page Application (SPA) using `react-router-dom`

CORE CONCEPTS:
1. Third-Party Routing:
   - React does not have built-in routing; it requires a third-party library like `react-router-dom`
   - Installation: `npm install react-router-dom`

2. The `<Link>` vs `<a>` Tag (CRITICAL RULE):
   - Never use standard HTML `<a>` tags in React. Clicking an `<a>` tag triggers a full page refresh, which destroys the React state and repaints the entire DOM from scratch
   - Instead, use `<Link to="...">` or `<NavLink to="...">`. These intercept the click and dynamically swap components without reloading the page

3. `<NavLink>` and `isActive`:
   - `<NavLink>` is a specialized version of `<Link>` that provides an `isActive` boolean variable inside its `className` callback
   - This allows you to dynamically inject classes (like changing text color to orange) when the user is currently on that specific route

4. Layouts and `<Outlet />`:
   - To keep the Header and Footer consistent across all pages, we create a `Layout` component
   - We use the `<Outlet />` component from React Router as a placeholder. The Router will dynamically inject the current page component (Home, About, etc.) exactly where the `<Outlet />` is placed

5. Dynamic Parameters (`useParams`):
   - You can capture dynamic values from the URL (e.g., `path="/user/:userid"`) using the `useParams` hook inside the component

6. Data Fetching with Loaders (`useLoaderData`):
   - Instead of waiting for a component to mount and using `useEffect` to fetch API data, React Router v6.4+ provides a `loader` property
   - The fetch request triggers the moment the user hovers over or clicks the link, initiating data fetching before the UI even renders, significantly improving performance
*/
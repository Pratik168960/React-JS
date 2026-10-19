/*
        LECTURE 21: HOW TO CONFIGURE REDUX TOOLKIT IN BIG PROJECTS

THE GOAL:
- Configure Redux Toolkit for the Mega Project to track the global state of the user's authentication (logged in vs logged out).
- Create a central `store.js` and an `authSlice.js` to manage the authentication state[cite: 15].
- Modify `App.jsx` to execute an Appwrite network request (`getCurrentUser`) when the app first mounts to check the user's session status[cite: 15].
- Implement a `loading` state in `App.jsx` to conditionally render the application only after the network request finishes[cite: 15].

CORE CONCEPTS:
1. Redux Store Setup (`store.js`):
   - Created inside `src/store/`.
   - Uses `configureStore` from `@reduxjs/toolkit`.
   - We pass an object containing `reducers` (currently just the `authSlice` reducer)[cite: 15].

2. Authentication Slice (`authSlice.js`):
   - Created inside `src/store/`.
   - Initial State: `{ status: false, userData: null }`.
   - Reducers:
     - `login`: Sets `status` to true and saves the `action.payload` to `userData`.
     - `logout`: Sets `status` to false and resets `userData` to null.
   - We export the actions (`login`, `logout`) for our components to use via `useDispatch`.
   - We export the reducer itself to be wired into the central store[cite: 15].

3. App.jsx Initialization Flow:
   - State `loading` is set to `true` by default because we immediately send a network request to Appwrite[cite: 15].
   - `useEffect` calls `authService.getCurrentUser()` when the component mounts.
     - `.then((userData)`: If Appwrite returns data, we dispatch the `login({userData})` action to Redux. If no data, we dispatch `logout()`.
     - `.finally()`: Regardless of success or failure, we set `loading` to `false` because the network request is done[cite: 15].
   - Returns a conditional render: If `!loading`, show the UI. If `loading`, show nothing (or a loading spinner)[cite: 15].

4. Component Structure (`components/` and `pages/`):
   - Set up the basic foundation for the `Header` and `Footer` components.
   - Created `src/components/index.js` as an export hub. Instead of importing 10 different components from 10 different files, we can import them all cleanly from this single `index.js` file[cite: 15].
   - Prepared `<Outlet />` from `react-router-dom` (currently commented out) to load dynamic pages later[cite: 15].
*/
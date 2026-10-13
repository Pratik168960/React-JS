/*
        LECTURE 13: CONTEXT API CRASH COURSE (MINI CONTEXT & THEME SWITCHER)

THE GOAL:
- Understand the Context API to solve prop-drilling by building two projects: a basic User Login/Profile tracker and a Tailwind Theme Switcher


CORE CONCEPTS:
1. Why Context API?
   - Context API solves prop-drilling by creating a global store (variable provider) outside the component tree so data doesn't have to be passed manually through every level

2. Creating a Context (`createContext`):
   - You instantiate a context using `React.createContext()` 
   - Every context acts as a Provider (e.g., `<UserContext.Provider>`) that wraps your components

3. Providing Values:
   - The Provider requires a `value` prop where you pass the objects, states, or methods you want to make globally available

4. Accessing Context (`useContext`):
   - Components consume the data by using the `useContext` hook and passing in the specific Context they want to read from

5. Production-Grade Context Pattern (Theme Switcher):
   - You can pass default fallback values and empty functions directly into `createContext({ themeMode: "light", darkTheme: () => {} })`
   - Creating a custom hook (e.g., `export default function useTheme() { return useContext(ThemeContext) }`) inside the context file is a cleaner, production-ready approach because it saves components from needing two separate imports
*/

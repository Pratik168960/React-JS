/*
        LECTURE 11: CUSTOM HOOKS & CURRENCY CONVERTER PROJECT

THE GOAL:
- Build a currency converter to understand custom hooks, component reusability, and handling APIs in React.

CORE CONCEPTS:
1. Custom Hooks (`useCurrencyInfo`):
   - A custom hook is a standard JavaScript function that uses built-in React hooks like `useState` and `useEffect`.
   - Naming convention: It must start with `use` (e.g., `useCurrencyInfo`).
   - Our custom hook fetches data and returns the data object, deliberately omitting the `setData` method so UI components cannot directly mutate the raw API data.
   - We initialize state with an empty object `{}` as a contingency plan so the app doesn't crash before the API fetch completes.

2. Component Reusability (`InputBox.jsx`):
   - By isolating the UI into `InputBox.jsx`, we can reuse the exact same layout for both the "From" and "To" input fields.

3. The `useId` Hook:
   - `useId` is a React hook that generates unique IDs, useful for binding accessibility attributes like `htmlFor` on a `<label>` to the `id` on an `<input>`.
   - Crucial Warning: Do NOT use `useId` to generate `key` props for elements in a list/loop.

4. Loops and The `key` Prop:
   - When iterating over arrays (like our currency options dropdown) to generate JSX elements, you must pass a unique `key` prop.
   - Without a `key`, React repeatedly recreates the DOM elements, which massively degrades rendering performance.
*/
/*
        LECTURE 23: REACT HOOK FORM IN PRODUCTION

THE GOAL:
- Build the `Login` and `Signup` components for the Mega Project.
- Learn to manage complex forms in production using the `react-hook-form` library instead of building dozens of manual `useState` bindings.
- Connect these forms to our custom `authService` (Appwrite) and update the global Redux store (`authSlice`) upon success.

CORE CONCEPTS:
1. Why React Hook Form?
   - Handling forms natively in React requires `useState` for every single input field (e.g., `email`, `password`, `name`). This causes unnecessary re-renders every time a user types a single character.
   - `react-hook-form` manages form state internally and handles validation, significantly boosting performance and reducing boilerplate code.

2. The `useForm` Hook:
   - We extract `register` and `handleSubmit` from `useForm()`.
   - `register`: Replaces the traditional `onChange` and `value` bindings. It connects our custom `<Input />` component (via the `forwardRef` we built in Lecture 22) directly to the form state.
   - `handleSubmit`: A wrapper function. It handles extracting all the form data into an object and then passes that data to our custom `login` or `signup` method.

3. The Login Flow:
   - User submits the form -> `react-hook-form` passes the `{email, password}` object to our `login` function.
   - We clear previous errors (`setError("")`).
   - We call `authService.login(data)` to authenticate with Appwrite.
   - If successful, we immediately call `authService.getCurrentUser()` to fetch their profile data.
   - We `dispatch(authLogin(userData))` to update the Redux store, letting the whole app know the user is authenticated.
   - Finally, we `navigate("/")` to redirect the user to the homepage.

4. The Signup Flow:
   - Very similar to login, but we call `authService.createAccount(data)` first.
   - Appwrite automatically creates a session (logs them in) if the account creation succeeds, so we fetch their user data and dispatch it to Redux just like the login flow.
*/

/*
        LECTURE 22: PRODUCTION GRADE REACT COMPONENTS

THE GOAL:
- Move away from beginner-level hardcoded UI elements and learn how enterprise applications build highly reusable foundational components.
- Build the core structural components: `Container`, `Logo`, `LogoutBtn`.
- Build the core UI elements: `Button` and `Input`.
- Understand and implement the `forwardRef` hook.

CORE CONCEPTS:
1. The Container Pattern:
   - A `Container` is a simple wrapper component that accepts `children`.
   - Its only job is to define width, max-width, and padding so that every page in the application aligns perfectly without rewriting CSS classes[cite: 1, 6].

2. The Button Component:
   - We design a generic Button that accepts `children` (for the text) and multiple optional props (`bgColor`, `textColor`, `type`, `className`).
   - Using template literals (`` `...` ``), we inject base Tailwind classes and append any custom user-defined classes passed down via props[cite: 1, 6].
   - We use the rest operator (`...props`) to capture any additional HTML attributes (like `onClick` or `disabled`) and spread them onto the native `<button>` element[cite: 1, 6].

3. The Input Component & forwardRef:
   - When building a custom `<Input />` component, we separate the UI from the state. However, the parent form (e.g., a Login page) needs access to the state of this input field to submit the data[cite: 1, 6].
   - If we just write a normal component, the parent cannot access the input's reference.
   - SOLUTION: We wrap our Input component in `React.forwardRef()`. This allows the parent component to pass a `ref` prop down into our custom Input, which we attach to the native HTML `<input ref={ref} />` element. This bridges the gap between reusable UI and form state management[cite: 1, 6].
   - We also use `useId()` to generate a unique ID, binding the `<label>` and the `<input>` together for accessibility (screen readers)[cite: 1, 6].
*/
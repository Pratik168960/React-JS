/*
        LECTURE 24: ADDING FORM AND SLUG VALUES (RTE & POST FORM)

THE GOAL:
- Integrate the TinyMCE Rich Text Editor into our React application (`RTE.jsx`).
- Connect this complex third-party editor to `react-hook-form` using the `Controller` wrapper so we can extract its HTML content.
- Build the `PostForm` component which will act as both the "Create Post" and "Edit Post" form.
- Implement a real-time slug generator that watches the "Title" input and automatically formats it into the "Slug" input.

CORE CONCEPTS:
1. The Problem with Third-Party Inputs (`RTE.jsx`):
   - Our standard custom `<Input />` component uses `forwardRef` to connect to `react-hook-form`.
   - Complex third-party libraries like TinyMCE don't expose a simple native `<input>` element.
   - Solution: `Controller` from `react-hook-form` acts as a bridge. It takes a `control` object (passed down from the parent form) and provides an `onChange` method that we bind to the TinyMCE editor's `onEditorChange` event[cite: 1, 3, 10].

2. Reusing the Form (Create vs. Update in `PostForm.jsx`):
   - If a `post` object is passed as a prop, we pre-fill the form using `useForm({ defaultValues: ... })` (Update Mode)[cite: 2, 6].
   - If `post` is undefined, we leave default values blank (Create Mode).

3. Real-Time Slug Generation (`watch` and `setValue` hooks):
   - We use `watch` from `react-hook-form` to listen for changes across the form continuously.
   - We use `setValue` to programmatically update the Slug input field[cite: 2, 6].
   - A custom `slugTransform` function uses Regex to convert string formats (e.g., "Hello World" -> "hello-world")[cite: 2, 6].
*/
import React from "react";

// NOTE: A highly reusable production-grade button. 
// It sets default values for colors/type, and spreads the rest of the props (...props) directly onto the button element[cite: 1, 6].
export default function Button({
    children, // Represents the text inside the button
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}



/*
What is forwardRef? (In Simple Terms)
Imagine you are building a Login Page (Parent). Instead of writing raw HTML <input> tags, you create a beautiful, reusable Input Component (Child) so you can easily reuse it for both the Username and Password fields.

The Problem:
When the user clicks "Submit", the Login Page needs to grab the text typed into those Input components. But by default, React doesn't let a parent component reach inside a child component to read its HTML elements.

The Solution (forwardRef):
Think of forwardRef as an extension wire.

The Login Page (Parent) creates a "reference wire" (ref) and passes it down to the child.

The Input Component (Child) uses forwardRef to accept this wire and plugs it directly into its native HTML <input> tag.

The Result:
Now, the Login Page has a direct connection to that input field! It can read what the user typed, clear the value, or even auto-focus the cursor, exactly as if the input field was written directly on the Login Page itself.

(In short: It bridges the gap so the parent can control the child's input state.)
*/
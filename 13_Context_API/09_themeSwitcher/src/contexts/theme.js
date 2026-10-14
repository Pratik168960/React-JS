import { createContext, useContext } from "react";

// NOTE: Passing default variables and empty methods so the context always has a valid fallback structure
// default object is passed 
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}, // whenever someone call the context we will get to these methods 
})

// Exporting the provider directly
export const ThemeProvider = ThemeContext.Provider

// NOTE: Creating a custom hook inside the context file. This means consumer components only need to import `useTheme` instead of importing both `useContext` and `ThemeContext`
export default function useTheme(){
    return useContext(ThemeContext)
}
import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    // NOTE: Extracting register and handleSubmit from the useForm hook.
    const {register, handleSubmit} = useForm()
    
    // Local state just to display error messages on the form if authentication fails.
    const [error, setError] = useState("")

    // The method called when the form is submitted
    const login = async(data) => {
        // Clear out any old errors when attempting a new login
        setError("")
        try {
            // Send the data (email, password) to Appwrite
            const session = await authService.login(data)
            
            if (session) {
                // If login successful, fetch the user's details
                const userData = await authService.getCurrentUser()
                // If user details exist, dispatch to Redux to update the global state
                if(userData) dispatch(authLogin(userData));
                // Redirect user to the home page programmatically
                navigate("/")
            }
        } catch (error) {
            // If Appwrite throws an error (e.g., wrong password), display it
            setError(error.message)
        }
    }

  return (
    <div
    className='flex items-center justify-center w-full'
    >
        <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
        <div className="mb-2 flex justify-center">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%" />
                    </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        <p className="mt-2 text-center text-base text-black/60">
                    Don&apos;t have any account?&nbsp;
                    <Link
                        to="/signup"
                        className="font-medium text-primary transition-all duration-200 hover:underline"
                    >
                        Sign Up
                    </Link>
        </p>
        
        {/* Display error message conditionally */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        
        {/* NOTE: handleSubmit acts as an event wrapper. We pass our custom 'login' function to it. "handleSubmit" will validate your inputs before invoking "login" */}
        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                // NOTE: The register hook maps this input field to the form data object.
                // We MUST spread it (...register) and provide a unique key ("email").
                // Validation rules (like regex) can also be passed here.
                {...register("email", {
                    required: true,
                    validate: {
                        matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be a valid address",
                    }
                })}
                />
                <Input
                label="Password: "
                type="password"
                placeholder="Enter your password"
                {...register("password", {
                    required: true,
                })}
                />
                
                {/* When this button is clicked, it triggers the form onSubmit */}
                <Button
                type="submit"
                className="w-full"
                >Sign in</Button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default Login
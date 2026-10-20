import React, {useId} from 'react'

// NOTE: We wrap the entire component function inside React.forwardRef.
// This allows parent components (like Login/Signup forms) to pass a 'ref' down to the actual HTML input element to control its state
const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
            ref={ref} // NOTE: Attaching the passed reference here this will give the reference to the parent component 
            {...props}
            id={id} // Binding the input to the label for accessibility
            />
        </div>
    )
})

export default Input
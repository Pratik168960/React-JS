import React, {useId} from 'react'

// NOTE: Just like the Input component, we use React.forwardRef here 
// so the parent form (using react-hook-form) can grab the selected value directly from the DOM
function Select({
    options, // Expects an array of strings (e.g., ["active", "inactive"])
    label,
    className = "",
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {/* Only render the label if the developer passed a label prop */}
        {label && <label htmlFor={id} className=''></label>}
        
        <select
        {...props} // all the props passed by the user  
        id={id}
        ref={ref} // Bridging the parent form to this actual select element via forwardRef
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
        >
            {/* 
                NOTE: We map over the options array. 
                We optionally chain (?.) map in case options is null/undefined to prevent the app from crashing
            */}
            {options?.map((option) => ( // optionally loop (?.) over the options array to prevent crashing if it's null/undefined
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

// We wrap the exported component in forwardRef here (an alternative syntax to doing it at the function declaration)
export default React.forwardRef(Select)
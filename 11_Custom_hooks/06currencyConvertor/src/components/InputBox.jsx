// eslint-disable-next-line no-unused-vars
import React, {useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd", // Default value to prevent errors if not explicitly passed.
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    // STEP 1: Generate a unique ID to strictly bind the label to the input field.
    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // STEP 2 (Removed): onChange={(e) => onAmountChange(e.target.value)} 
                    // Passing a string directly causes JavaScript concatenation bugs later.
                    
                    // FINAL CODE: Safely check if the function exists, then cast the event value to a Number.
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {/* STEP 3: Loop through options. Passing a 'key' prop is mandatory for UI performance. 
                    but here is a problem when your value is repeating react performance gets heated react does not know that creating dom again and again is same single element multiple times so whenever we apply loop in jsx we should pass a key 
                    REMEMBER THE KEY IN LOOPS IN REACT*/}
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                
                </select>
            </div>
        </div>
    );
}

export default InputBox;
import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    // STEP 1: Initialize state with an empty object as a fallback contingency.
    const [data, setData] = useState({})
    
    // STEP 2: Trigger the fetch whenever the 'currency' dependency changes.
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json()) // values came from api calls look like json but are string format we have to handle it convert in json 
        // STEP 2.1 (Removed): We didn't know the exact key previously, so we dynamically access it using bracket notation res[currency].
        // FINAL CODE: Set the data specifically for the fetched currency.
        .then((res) => setData(res[currency]))
        
        // STEP 3 (Removed): console.log(data); // Kept temporarily for debugging the API response.
    }, [currency]) // Dependency array ensures effect runs only when 'currency' changes.

    // STEP 4: Return only the data object, not the setter.
    return data
}

export default useCurrencyInfo;
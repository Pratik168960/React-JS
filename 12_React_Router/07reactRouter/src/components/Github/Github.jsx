/* eslint-disable react-refresh/only-export-components */
import { useLoaderData } from 'react-router-dom'

function Github() {
    // FINAL CODE: Hooking into the loader function provided in the Route setup for optimized data loading
    const data = useLoaderData()
    
    /* 
    // STEP 1 (Removed): The standard useEffect fetch block
    // Commented out because loaders fetch data instantly on hover/click interaction, bypassing component mount delays
    
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/Pratik168960')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])
    */

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers: {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

// NOTE: Route loader function defined in the same file as the component to keep related logic grouped together
// React Router uses this to trigger the API call as soon as the route starts loading
export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/Pratik168960')
    return response.json()
}
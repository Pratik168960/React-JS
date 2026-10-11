import { useParams } from 'react-router-dom'

function User() {
    // NOTE: Extract the dynamic variable (userid) exactly as defined in the main.jsx route path (user/:userid)
    const {userid} = useParams()
    
    return (
        <div className='bg-gray-600 text-white text-3xl p-4 text-center'>
            User: {userid}
        </div>
    )
}

export default User
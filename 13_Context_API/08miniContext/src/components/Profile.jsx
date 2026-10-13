import {useContext} from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    // NOTE: Using useContext to extract the 'user' object from the global store to read the data
    const {user} = useContext(UserContext)
    
    // Conditional rendering based on context data
    if (!user) return <div>Please login</div>

    return <div>Welcome {user.username}</div>
}

export default Profile
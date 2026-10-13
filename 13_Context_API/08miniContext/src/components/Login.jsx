import {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // NOTE: Using useContext to extract just the setUser method from our global store to update the data
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault() // by default when we submit the value of url goes somewhere so we have to prevent this 
        setUser({username, password})
    }

    return (
        <div>
            <h2>Login</h2>
            <input type='text'
            value={username}
            onChange={(e) => setUsername(e.target.value) }    //e = event
            placeholder='username'  />
            {" "}
            <input type='text' 
            value={password}
            onChange={(e) => setPassword(e.target.value) }
            placeholder='password'  />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
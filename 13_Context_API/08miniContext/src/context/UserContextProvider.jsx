import {useState} from "react";
import UserContext from "./UserContext";

// NOTE: 'children' is a generic name for whatever components are passed inside the provider wrapper]
const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    return(
        // We pass an object containing both the state (user) and the updater function (setUser) so consumer components can both read and write
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
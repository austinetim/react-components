import { createContext, useContext, useState} from "react";

const UserContext = createContext(undefined);

// The UserProvider component is what allows consuming components to subscribe to context changes. 

export const UserProvider = ({children}) => {
    const [user] = useState({
        name: 'John',
        email: 'john@example.com', 
        dob : "01/10/2000"
    });
    return <UserContext.Provider value={{user}}></UserContext.Provider>;   
};

export const useUser = () => useContext(UserContext);
import { createContext, useState } from 'react';


const defaultValues = {
    username: "",
    setUsername: () => {}
}

export const UserContext = createContext(defaultValues);


// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("")

  const login = () => {
    setLoggedIn(true);
  };

  // Function to handle logout
  const logout = () => {
    setLoggedIn(false);
  };

    return (
        <UserContext.Provider 
            value={{
                loggedIn,
                login,
                logout,
                username, 
                setUsername
            }}
            >
            {children}
        </UserContext.Provider>
    )
}

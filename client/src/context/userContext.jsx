import { createContext, useState, useEffect } from 'react';

const defaultValues = {
    username: "",
    setUsername: () => {},
    password: "",
    setPassword: () => {}, 
    userList: "", 
    setUserList: () => {}, 
    loggedIn: "", 
    setLoggedIn: () => {}
}

export const UserContext = createContext(defaultValues);
let usersInList = []

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState("");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [userList, setUserList] = useState([])
  
  // eslint-disable-next-line react-refresh/only-export-components
  const loginUser = async (username, password) => {
    const loginResponse = await fetch(`/api/users`, {
      method: "POST", 
      body: JSON.stringify({
        userEmail: username, 
        userPassword: password
      }), 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const user = await loginResponse.json()
    setLoggedIn(user.id); 
  };
  
  const saveUser = async (username, password) => { //TODO: Byt username till email
    await fetch(`http://localhost:3000/api/save`, {
      method: "POST", 
      body: JSON.stringify({
        userEmail: username, 
        userPassword: password, 
        description: "User created at webpage"
      }), 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
  }
  // saveUser() KÖRS när man klickar på skapa användare. Exportera funktionen till en egen popup-ruta. 
  // TODO "Skapa användare" skall öppna popuppen. 
 
  useEffect(() => {
    const fetchUsernames = async () => {
      const response = await fetch(`http://localhost:3000/api/users`);
      const data = await response.json();
      data.forEach(user => {
        usersInList.push(user.email)
      });
      
      setUserList(usersInList);
      usersInList = []      
    };
    fetchUsernames();
  },[username]);

  // Function to handle logout
  const logout = async () => {
    await fetch(`/api/users/logout`, {
      method: "POST", 
    })
    setLoggedIn("") //TODO - Ta bort dessa tre!
    setUsername("")
    setPassword("")
  };

    return (
        <UserContext.Provider 
            value={{
                loggedIn,
                loginUser,
                logout,
                username, 
                setUsername, 
                password, 
                setPassword, 
                userList, 
                setUserList, 
                saveUser,
                setLoggedIn,               
            }}
            >
            {children}
        </UserContext.Provider>
    )
}
import { createContext, useState, useEffect } from 'react';

const defaultValues = {
    userEmail: "",
    setuserEmail: () => {},
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
  const [userEmail, setuserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userList, setUserList] = useState([])
  
  // eslint-disable-next-line react-refresh/only-export-components
  const loginUser = async (userEmail, password) => {
    const loginResponse = await fetch(`/api/users`, {
      method: "POST", 
      body: JSON.stringify({
        userEmail: userEmail, 
        userPassword: password
      }), 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    const user = await loginResponse.json()
    
    console.log(user); // TODO Ta bort denna loggen
    console.log(user.email); // TODO Ta bort denna loggen


      setuserEmail(user.email)
      setLoggedIn(user.id); 
      localStorage.setItem("LoggedInUser", user.name)
      localStorage.setItem("LoggedInUserEmail", user.email)
      localStorage.setItem("LoggedInUserId", user.id)
    
  };
  
  const saveUser = async (userEmail, password) => {
    if(userList.length > 0) {
      const existingUserIndex = userList.indexOf(userEmail)
      if(existingUserIndex !== -1){
        // setWarning("Användaren finns redan") // TODO : Skapa funktionen
        console.log("Användaren finns redan");
        return
      }
    }

    await fetch(`http://localhost:3000/api/save`, {
      method: "POST", 
      body: JSON.stringify({
        name: "webUser", //TODO ha med namn vid skapande av användare
        userEmail: userEmail, 
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
    const fetchuserEmails = async () => {
      const response = await fetch(`http://localhost:3000/api/users`); 
      const data = await response.json();
      data.forEach(user => {
        usersInList.push(user.email)
      });
      
      setUserList(usersInList);
      usersInList = []      
    };
    fetchuserEmails();
  },[userEmail]);

  // Function to handle logout
  const logout = async () => {
    await fetch(`/api/users/logout`, {
      method: "POST", 
    })
    localStorage.removeItem("LoggedInUser")
    localStorage.removeItem("LoggedInUserEmail")
    localStorage.removeItem("LoggedInUserId")
    localStorage.removeItem("DiceCart")
    localStorage
    setLoggedIn("") 
    // setuserEmail("")
    // setPassword("")
  };

    return (
        <UserContext.Provider 
            value={{
                loggedIn,
                loginUser,
                logout,
                userEmail, 
                setuserEmail, 
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
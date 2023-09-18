import { createContext, useState, useEffect } from 'react';

const defaultValues = {
    userEmail: "",
    password: "",
    userList: "", 
    loggedIn: "", 
    showAccount: false,
    showCreateUserOptions: false, 
    username: "", 
    warning: "",
    setuserEmail: () => {},
    setPassword: () => {}, 
    setUserList: () => {}, 
    setLoggedIn: () => {},
    setShowAccount: () => {},
    setShowCreateUserOptions: () => {}, 
    setUsername: () => {}, 
    setWarning: () => {}
}

export const UserContext = createContext(defaultValues);
let usersInList = []

// eslint-disable-next-line react/prop-types
export function UserProvider({ children }) {
  const [loggedIn, setLoggedIn] = useState("");
  const [userEmail, setuserEmail] = useState("")
  const [password, setPassword] = useState("")
  const [userList, setUserList] = useState([])
  const [showAccount, setShowAccount] = useState(false)
  const [showCreateUserOptions, setShowCreateUserOptions] = useState(false)
  const [username, setUsername] = useState("")
  const [warning, setWarning] = useState("")
  
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
      if(!loginResponse.ok){
        setWarning("Inloggningen misslyckades")
      }
      setShowAccount(false)
      setuserEmail(user.email)
      setLoggedIn(user.id); 
      localStorage.setItem("LoggedInUser", user.name)
      localStorage.setItem("LoggedInUserEmail", user.email)
      localStorage.setItem("LoggedInUserId", user.id)
  };
  
  const saveUser = async (username, userEmail, password) => {
    if(username && userEmail && password !== ""){
      if(userList.length > 0) {
        const existingUserIndex = userList.indexOf(userEmail)
        if(existingUserIndex == -1){
          await fetch(`http://localhost:3000/api/save`, {
            method: "POST", 
            body: JSON.stringify({
              name: username, 
              userEmail: userEmail, 
              userPassword: password, 
              description: "User created at webpage"
            }), 
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })   
        } else {
          setWarning("Epostadressen finns redan registrerad") 
          return
        }
      }
      setShowCreateUserOptions(false)
    } else {
    setWarning("Fyll i samtliga fält")
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setWarning("");
    }, 2000);
  }, [warning])
 
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
                showAccount, 
                setShowAccount,
                showCreateUserOptions, 
                setShowCreateUserOptions,
                username, 
                setUsername, 
                warning, 
                setWarning               
            }}
            >
            {children}
        </UserContext.Provider>
    )
}
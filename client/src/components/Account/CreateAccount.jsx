import { useContext } from "react"
import "./PopupStyle.css"
import { UserContext } from "../../context/userContext";
// import Login from "./LogIn"

function CreateAccount() {

  const { userEmail, setuserEmail, password, 
    setPassword, saveUser, setShowCreateUserOptions, 
    setUsername, username, warning   
  } = useContext(UserContext)

return (
  <div>
      <p>Skapa konto: </p>
      <div id="warningText"><p>{warning}</p></div>
      <div className="popupWindowContent">
        <input onChange={(e) => setUsername(e.target.value)} className="username" type="text" placeholder="Användarnamn" />
        <input onChange={(e) => setuserEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" />
        <button onClick={() => saveUser(username, userEmail, password)}>Skapa konto</button>
        <button onClick={() => setShowCreateUserOptions(false)}>Avbryt</button>
      </div>      
    </div>
  )
}

export default CreateAccount
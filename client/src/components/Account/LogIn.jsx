import { useContext } from "react"
import "./PopupStyle.css"
import { UserContext } from "../../context/userContext";

function Login() {
  const { userEmail, setuserEmail, password, 
    setPassword, userList, loginUser, 
    loggedIn, logout, setWarning, warning } = useContext(UserContext)

  async function login() {
    if(document.querySelector(".userEmail").value){
      const index = userList.indexOf(document.querySelector(".userEmail").value)
      if(index < 0){
        setWarning("Användaren finns inte");
      }
    } else {
      setWarning("Fyll i användarnamn")
    }
    if(document.querySelector(".password").value){
      loginUser(userEmail, password) 
      document.querySelector(".userEmail").value = "";
      document.querySelector(".password").value = "";
    } else {
      setWarning("Lösenord saknas");
    }
  }
  
return (
    <div >
      <p>Logga in:</p>
      <div id="warningText"><p>{warning}</p></div>
      
      <div className="popupWindowContent">
      <input onChange={(e) => setuserEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" />
        {!loggedIn ? <button onClick={() => login(userEmail, password)}>Logga in</button> : 
        <button onClick={() => logout()}>Logga ut</button>}
        <p>Eller skapa konto nedan:</p>
        </div>
    </div>
  )
}

export default Login
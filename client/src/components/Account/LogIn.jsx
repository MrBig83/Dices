import { useContext } from "react"
// import { ProductContext } from "../../context/productContext";

import "./PopupStyle.css"
import { UserContext } from "../../context/userContext";

function Login() {

  // const { productsInCart, productList, performCheckout } = useContext(ProductContext)
  const { userEmail, setuserEmail, password, 
    setPassword, userList, saveUser, loginUser, 
    loggedIn, setLoggedIn, logout, showAccount,
    showCreateUserOptions, setShowCreateUserOptions   } = useContext(UserContext)

  async function login() {
    if(document.querySelector(".userEmail").value){
      const index = userList.indexOf(document.querySelector(".userEmail").value)
      if(index < 0){
        console.log("Användaren finns inte");
        console.log("TODO: Rendera skapa användare");
        //TODO: Rendera skapa användare
      }
    } else {
      //TODO: Visa felmeddelande: Fyll i användarnamn
    }
    if(document.querySelector(".password").value){
      loginUser(userEmail, password) 
      document.querySelector(".userEmail").value = "";
      document.querySelector(".password").value = "";
    } else {
      console.log("Lösenord saknas"); //TODO skapa en riktigt varning
    }
  }
  
// TODO : Hover-Färg på köp-knappen när man inte är inloggad. 
return (
    
    <div className="loginWindow">
      <h4>Logga in:</h4>

      <input onChange={(e) => setuserEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" />
        
        {!loggedIn ? <button onClick={() => login(userEmail, password)}>Logga in</button> : 
        <button onClick={() => logout()}>Logga ut</button>}
        <p>Eller skapa konto nedan:</p>
        

        {/* <button onClick={() => setShowCreateUserOptions(true)}>Skapa konto</button> */}
        
      
    </div>
  )
}

export default Login
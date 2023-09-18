import { useContext } from "react"
// import { ProductContext } from "../../context/productContext";

import "./PopupStyle.css"
import { UserContext } from "../../context/userContext";
import Login from "./LogIn"
import CreateAccount from "./CreateAccount"

function Account() {

  // const { productsInCart, productList, performCheckout } = useContext(ProductContext)
  const { userEmail, setuserEmail, password, 
    setPassword, userList, saveUser, loginUser, 
    loggedIn, setLoggedIn, logout, showAccount,
    setShowAccount, showCreateUserOptions, 
    setShowCreateUserOptions   } = useContext(UserContext) // TODO Går att skapa två konton med samma mail

  // async function login() {
  //   if(document.querySelector(".userEmail").value){
  //     const index = userList.indexOf(document.querySelector(".userEmail").value)
  //     if(index < 0){
  //       console.log("Användaren finns inte");
  //       console.log("TODO: Rendera skapa användare");
  //       //TODO: Rendera skapa användare
  //     }
  //   } else {
  //     //TODO: Visa felmeddelande: Fyll i användarnamn
  //   }
  //   if(document.querySelector(".password").value){
  //     loginUser(userEmail, password) 
  //     document.querySelector(".userEmail").value = "";
  //     document.querySelector(".password").value = "";
  //   } else {
  //     console.log("Lösenord saknas"); //TODO skapa en riktigt varning
  //   }
  // }
  
  
  
  // function createUser() {   
  //   if(!showCreateUserOptions){
  //     setShowCreateUserOptions(true);
  //   } else {
  //     setShowCreateUserOptions(false);
  //   }
  //   if(userEmail && password){
  //     // saveUser(userEmail, password)
  //   } else {
  //     console.log("Fyll i användarnamn och lösenord");
  //   }
  //   return showCreateUserOptions
  // } 
// TODO : Hover-Färg på köp-knappen när man inte är inloggad. 
return (
    <div className="accountWindow">
      <div className="accountWindowHeader">
        <h3>Konto</h3>
        <button className="closeWindow" onClick={() => setShowAccount(false)}>X</button>
      </div>
      <div className="accountWindowContent">
      {!loggedIn && !showCreateUserOptions ? <div><Login /><button onClick={() => setShowCreateUserOptions(true)}>Skapa konto</button></div> : "" }
      {loggedIn ? <button onClick={() => logout()}>Logga ut</button>: "" }

      {showCreateUserOptions ? <CreateAccount /> : "" } 
      </div>
      {/* <h4>Logga in:</h4>
      {showCreateUserOptions ? <div>
        <input onChange={(e) => setUsername(e.target.value)} className="username" type="text" placeholder="Användarnamn" />
        </div> : ""} */}
{/* 
      <input onChange={(e) => setuserEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" />
        
        {!loggedIn ? <button onClick={() => login(userEmail, password)}>Logga in</button> : 
        <button onClick={() => logout()}>Logga ut</button>} */}
        
        {/* {showCreateUserOptions ? <div>
          <button onClick={() => createUser()}>Avbryt</button>
        </div> : 
        <button onClick={() => createUser(userEmail, password)}>Skapa konto</button>} */}
        
      
    </div>
  )
}

export default Account
import { useContext } from "react"
// import { ProductContext } from "../../context/productContext";

import "./PopupStyle.css"
import { UserContext } from "../../context/userContext";
import Login from "./LogIn"

function CreateAccount() {

  // const { productsInCart, productList, performCheckout } = useContext(ProductContext)
  const { userEmail, setuserEmail, password, 
    setPassword, userList, saveUser, loginUser, 
    loggedIn, setLoggedIn, logout, showAccount,
    showCreateUserOptions, setShowCreateUserOptions, 
setUsername, username   } = useContext(UserContext)

//   async function login() {
//     if(document.querySelector(".userEmail").value){
//       const index = userList.indexOf(document.querySelector(".userEmail").value)
//       if(index < 0){
//         console.log("Användaren finns inte");
//         console.log("TODO: Rendera skapa användare");
//         //TODO: Rendera skapa användare
//       }
//     } else {
//       //TODO: Visa felmeddelande: Fyll i användarnamn
//     }
//     if(document.querySelector(".password").value){
//       loginUser(userEmail, password) 
//       document.querySelector(".userEmail").value = "";
//       document.querySelector(".password").value = "";
//     } else {
//       console.log("Lösenord saknas"); //TODO skapa en riktigt varning
//     }
//   }
  
// async function saveUser(username, userEmail, password)
// if(username, userEmail && password){
//     //Kör funktionen för att skapa användare
//   } else {
//     console.log("Fyll i användarnamn och lösenord");
//   }
  
//   function createUser() {   
//     if(!showCreateUserOptions){
//       setShowCreateUserOptions(true);
//     } else {
//       setShowCreateUserOptions(false);
//     }

//     // return showCreateUserOptions
//   } 
// TODO : Hover-Färg på köp-knappen när man inte är inloggad. 
return (
    <div className="createAccountWindow">
      <h4>Skapa konto:</h4>
      <input onChange={(e) => setUsername(e.target.value)} className="username" type="text" placeholder="Användarnamn" />
      <input onChange={(e) => setuserEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" />
      {/* {!loggedIn ? <Login /> : <button onClick={() => logout()}>Logga ut</button> } */}
      {/* <h4>Logga in:</h4>
      {showCreateUserOptions ? <div>
        <input onChange={(e) => setUsername(e.target.value)} className="username" type="text" placeholder="Användarnamn" />
        </div> : ""} */}
{/* 
      <input onChange={(e) => setuserEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" />
        
        {!loggedIn ? <button onClick={() => login(userEmail, password)}>Logga in</button> : 
        <button onClick={() => logout()}>Logga ut</button>} */}
        
        <button onClick={() => saveUser(username, userEmail, password)}>Skapa konto</button>
        {showCreateUserOptions ? <div>
          <button onClick={() => setShowCreateUserOptions(false)}>Avbryt</button>
        </div> : "" }
        {/* <button onClick={() => createUser(userEmail, password)}>Skapa konto</button>} */}
        
      
    </div>
  )
}

export default CreateAccount
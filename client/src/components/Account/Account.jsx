import { useContext } from "react"
// import { ProductContext } from "../../context/productContext";

import "./PopupStyle.css"
import { UserContext } from "../../context/userContext";
import Login from "./LogIn"
import CreateAccount from "./CreateAccount"

function Account() {

  // const { productsInCart, productList, performCheckout } = useContext(ProductContext)
  const { loggedIn, logout, setShowAccount, showCreateUserOptions, 
    setShowCreateUserOptions } = useContext(UserContext) 
 
return (
    <div className="popupWindow">
      <div className="popupWindowHeader">
        <h3>Konto</h3>
        <p className="closeWindow" onClick={() => setShowAccount(false)}>X</p>
      </div>
      {!loggedIn && !showCreateUserOptions ? <div><Login /><button onClick={() => setShowCreateUserOptions(true)}>Skapa konto</button></div> : "" }
      {loggedIn ? <button onClick={() => logout()}>Logga ut</button>: "" }
      {showCreateUserOptions ? <CreateAccount /> : "" }      
    </div>
  )
}

export default Account
import { useContext } from "react"
// import {FontAwesomeIcon} from "font-awesome"

import { ProductContext } from "../../context/productContext"
import { UserContext } from "../../context/userContext"
import "./headerStyle.css"

// import { UserContext } from "../../context/userContext"


function Header() {
  const { productsInCart, performCheckout } = useContext(ProductContext)
  const { loggedIn, setLoggedIn, logout } = useContext(UserContext)
  

  // function checkLS() {
  //   let diceCart  = localStorage.getItem("DiceCart")
  //   if(diceCart) {
  //     diceCart = JSON.parse(diceCart)
  //     setProductsInCart(diceCart)
  //     return
  //   }
  //   return
  // }
  
setLoggedIn(localStorage.getItem("LoggedInUser"))
// setProductsInCart(localStorage.getItem("DiceCart"))
  // const { setuserEmail } = useContext(UserContext)
let totalQty = 0;
productsInCart.map((item) => {
  totalQty = totalQty + item.qty
})

  function renderLogin() {

  }

  // function login() {
  //   if(document.querySelector("input").value){
  //     setuserEmail(document.querySelector("input").value)
  //   }
  // }


  return (
    <div className="header">
        <img alt="Logo" />
        <div className="header-right">

          {loggedIn ? <p>Välkommen: {loggedIn}</p> : ""}
          {!loggedIn ? <button onClick={renderLogin}>Logga in</button> : <button onClick={() => logout()}>Logga ut</button>}
          
          <img alt="Cart" />
          <p>{totalQty}</p>
          {loggedIn ? <button onClick={() => performCheckout(productsInCart)}>Köp</button> : 
          <button className="btnDisabled">Köp</button>}
          
        </div>
    </div>
  )
}

export default Header
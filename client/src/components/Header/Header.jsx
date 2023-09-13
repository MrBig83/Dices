import { useContext } from "react"
import { NavLink } from "react-router-dom"
// import {FontAwesomeIcon} from "font-awesome"

import { ProductContext } from "../../context/productContext"
import { UserContext } from "../../context/userContext"
import { OrderContext } from "../../context/orderContext"
import "./headerStyle.css"

// import { UserContext } from "../../context/userContext"


function Header() {
  const { productsInCart, performCheckout } = useContext(ProductContext)
  const { loggedIn, logout } = useContext(UserContext)
  const { showOrders, setShowOrders } = useContext(OrderContext)
  

  // function checkLS() {
  //   let diceCart  = localStorage.getItem("DiceCart")
  //   if(diceCart) {
  //     diceCart = JSON.parse(diceCart)
  //     setProductsInCart(diceCart)
  //     return
  //   }
  //   return
  // }

  // useEffect(()=> {
  //   const loggedInUserName = localStorage.getItem("LoggedInUser")
  // })


  // setProductsInCart(JSON.parse(localStorage.getItem("DiceCart")))
    let totalQty = 0;
  
    productsInCart.map((item) => {
      totalQty = totalQty + item.qty
    })
  

  function renderLogin() {
    console.log("Nu ska vi visa en login-popup"); //TODO Bygg denna funktion
  }
  function renderOrders() {
    if(!showOrders){
      setShowOrders(true)
      console.log(showOrders);
      console.log("Nu ska vi visa ordrar..."); //TODO Bygg denna funktion
    } else {
      setShowOrders(false)
      console.log(showOrders);
      console.log("Nu ska vi DÖLJA ordrar..."); //TODO Bygg denna funktion
    }

    

  }

  return (
    <div className="header">
        <NavLink to="/"><img alt="Logo" /></NavLink>
        <div className="header-right">

          {loggedIn ? <p>Välkommen: {localStorage.getItem("LoggedInUser")}</p> : ""}
          {!loggedIn ? <button onClick={renderLogin}>Logga in</button> : <button onClick={() => logout()}>Logga ut</button>}
          {loggedIn ? <button onClick={renderOrders}>Mina ordrar</button> : ""}
          
          <img alt="Cart" />
          <p>{totalQty}</p>
          {loggedIn ? <button onClick={() => performCheckout(productsInCart, loggedIn)}>Köp</button> : 
          <button className="btnDisabled">Köp</button>}
          
        </div>
    </div>
  )
}

export default Header
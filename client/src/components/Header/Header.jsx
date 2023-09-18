import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ProductContext } from "../../context/productContext"
import { UserContext } from "../../context/userContext"
import { OrderContext } from "../../context/orderContext"
import "./headerStyle.css"

function Header() {
  const { productsInCart, showCart, setShowCart } = useContext(ProductContext)
  const { loggedIn, showAccount, setShowAccount } = useContext(UserContext)
  const { showOrders, setShowOrders } = useContext(OrderContext)
  
    let totalQty = 0;
    productsInCart.map((item) => {
      totalQty = totalQty + item.qty
    })
  
  function renderOrders() {
    if(!showOrders){
      setShowOrders(true)
    } else {
      setShowOrders(false)
    }
  }
  
  function renderAccount() {
    if(!showAccount){
      setShowAccount(true)
    } else {
      setShowAccount(false)
    }
  }
  
  function renderCart() {
    if(!showCart){
      setShowCart(true)
    } else {
      setShowCart(false)
    }
  }

  return (
    <div className="header">
        <NavLink to="/"><img alt="Logo" /></NavLink>
        <div className="header-right">

          {loggedIn ? <p>Välkommen: {localStorage.getItem("LoggedInUser")}</p> : ""}
          <button onClick={renderAccount}>Konto</button>
          {loggedIn ? <button onClick={renderOrders}>Mina ordrar</button> : ""}
          
          <button onClick={renderCart}>Kundvagn</button>
          {totalQty > 0 ? <div className="qty">
            <p >{totalQty}</p>
          </div> : "" }          
        </div>
    </div>
  )
}

export default Header
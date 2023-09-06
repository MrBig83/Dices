import { useContext } from "react"
// import {FontAwesomeIcon} from "font-awesome"

import { ProductContext } from "../../context/productContext"
import "./headerStyle.css"

// import { UserContext } from "../../context/userContext"


function Header() {
  const { productsInCart } = useContext(ProductContext)

  // const { setUsername } = useContext(UserContext)
const qtyInCart = productsInCart.length


  function renderLogin() {

  }

  // function login() {
  //   if(document.querySelector("input").value){
  //     setUsername(document.querySelector("input").value)
  //   }
  // }


  return (
    <div className="header">
        <img alt="Logo" />
        <div className="header-right">

          {/* <input type="text" /> */}
          <button onClick={renderLogin}>Logga in</button>
          
          <img alt="Cart" />
          <p>{qtyInCart}</p>
        </div>
    </div>
  )
}

export default Header
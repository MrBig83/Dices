import { useContext, useEffect } from "react"
import { UserContext } from "../../context/userContext"
import { ProductContext } from "../../context/productContext"
import { OrderContext } from "../../context/orderContext"
import ProductList from "../ProductList/ProductList"
import Orders from "../Orders/Orders"
import Cart from "../Cart/Cart"
import Account from "../Account/Account"

const Home = () => {
  const {showOrders} = useContext(OrderContext)
  const { showCart, setProductsInCart } = useContext(ProductContext)
  const {  setuserEmail, setLoggedIn,  showAccount } = useContext(UserContext)

useEffect(()=> {
  if(localStorage.getItem("LoggedInUser")){ 
    setuserEmail(localStorage.getItem("LoggedInUserEmail"))
    setLoggedIn(localStorage.getItem("LoggedInUserId")); 
    setProductsInCart(JSON.parse(localStorage.getItem("DiceCart")))
  }
}, [])
    
  return (
    <div>        
        {showOrders ? <Orders /> : ""}
        {showCart ? <Cart /> : ""}
        {showAccount ? <Account /> : ""}
        <ProductList />        
    </div>
  )
}

export default Home
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
  const { userEmail, setuserEmail, password, 
    setPassword, userList, saveUser, loginUser, 
    loggedIn, setLoggedIn, logout, showAccount } = useContext(UserContext)

  
useEffect(()=> {
  if(localStorage.getItem("LoggedInUser")){ 
    setuserEmail(localStorage.getItem("LoggedInUserEmail"))
    setLoggedIn(localStorage.getItem("LoggedInUserId")); 
    setProductsInCart(JSON.parse(localStorage.getItem("DiceCart")))
  }
}, [])
  
  
  
  // async function login() {
  //   if(document.querySelector(".userEmail").value){
  //     const index = userList.indexOf(document.querySelector(".userEmail").value)
  //     if(index < 0){
  //       console.log("Användaren finns inte");
  //       renderCreateUser()
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
  //   if(userEmail && password){
  //     saveUser(userEmail, password)
  //   } else {
  //     console.log("Fyll i användarnamn och lösenord");
  //   }
  // } 
 

  // async function renderCreateUser() {
  //   console.log("Nu skall här skapas användare");
  //   // TODO: Set state boolean för att visa "skapa användare" eller inte. 
  //   // Gör sedan en if-sats i return som avgör om "skapa användare" skall visas eller inte.
  // }

  
  return (
    <div>
        {/* <p>Användare:</p>
        <input onChange={(e) => setuserEmail(e.target.value)} className="userEmail" type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" />
        {!loggedIn ? <button onClick={() => login(userEmail, password)}>Logga in</button> : 
        <button onClick={() => logout()}>Logga ut</button>}
        <button onClick={() => createUser(userEmail, password)}>Skapa användare</button> */}
        <p> TODO : Skapa popup för inloggning</p>
        {showOrders ? <Orders /> : ""}
        {showCart ? <Cart /> : ""}
        {showAccount ? <Account /> : ""}
        <ProductList />        
    </div>
  )
}

export default Home
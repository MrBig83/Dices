import { useContext } from "react"
import { UserContext } from "../../context/userContext"
import ProductList from "../ProductList/ProductList"


const Home = () => {
  const { username, setUsername, password, setPassword, userList, saveUser, loginUser, loggedIn, logout } = useContext(UserContext)

  async function login() {
    if(document.querySelector(".userName").value){
      const index = userList.indexOf(document.querySelector(".userName").value)
      if(index < 0){
        console.log("Användaren finns inte");
        renderCreateUser()
        //TODO: Rendera skapa användare
      }
    } else {
      //TODO: Visa felmeddelande: Fyll i användarnamn
    }
    if(document.querySelector(".password").value){
      loginUser(username, password) 
      document.querySelector(".userName").value = "";
      document.querySelector(".password").value = "";
    } else {
      console.log("Lösenord saknas"); //TODO skapa en riktigt varning
    }
  }

  function createUser() {   
    if(username && password){
      saveUser(username, password)
    } else {
      console.log("Fyll i användarnamn och lösenord");
    }
  } 
 

  async function renderCreateUser() {
    console.log("Nu skall här skapas användare");
    // TODO: Set state boolean för att visa "skapa användare" eller inte. 
    // Gör sedan en if-sats i return som avgör om "skapa användare" skall visas eller inte.
  }

  
  return (
    <div>
        <p>Användare:</p>
        <input onChange={(e) => setUsername(e.target.value)} className="userName" type="text" placeholder="Email" />
        <input onChange={(e) => setPassword(e.target.value)} className="password" type="text" placeholder="Lösenord" />
        <button onClick={() => login(username, password)}>Logga in</button>
        <button onClick={() => logout()}>Logga ut</button>
        <button onClick={() => createUser(username, password)}>Skapa användare</button>
        <p>Här vill jag visa mina produkter</p>
        <ProductList />

        <p>Nedan visas username om man loggar in. TODO : Det skall tas bort sen... </p>
        <h1>{username}</h1>
        <h1>{password}</h1>
        <h1>{loggedIn}</h1>
        
    </div>
  )
}

export default Home
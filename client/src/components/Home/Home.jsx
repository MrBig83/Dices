import { useContext } from "react"

import { UserContext } from "../../context/userContext"
import ProductList from "../ProductList/ProductList"

const Home = () => {
  const { username } = useContext(UserContext)

  
  return (
    <div>
        <p>Här vill jag visa mina produkter</p>
        <p>Nedan visas username om man loggar in. Det skall tas bort sen... </p>
        <ProductList />

        <h1>{username}</h1>
    </div>
  )
}

export default Home
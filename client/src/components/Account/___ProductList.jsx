import { ProductContext } from "../../context/productContext"
import { useContext, useEffect } from 'react';
import "./ProductListStyle.css"
import { UserContext } from "../../context/userContext";

function ProductList() {
  
const { productList, setProductsInCart, productsInCart } = useContext(ProductContext)
const { loggedIn } = useContext(UserContext)

useEffect(()=> {
  localStorage.setItem("DiceCart", JSON.stringify(productsInCart))
}, [productsInCart]) // TODO : Detta block ställer till det så att LS töms vid refresh

const addToCart = (product) => {
  const cartObj = {
  id: product,
  qty: 1,
  }
  updateItemQuantity(cartObj)
}
    
    const updateItemQuantity = (cartObj) => {
      if (productsInCart.length > 0) {
        const existingCartItemIndex = productsInCart.findIndex((productsInCart) => productsInCart.id === cartObj.id)
        
        if (existingCartItemIndex !== -1){
          const updatedCart = [...productsInCart];
          updatedCart[existingCartItemIndex].qty += 1;
          setProductsInCart(updatedCart)
          
        } else {
          setProductsInCart([...productsInCart, cartObj])   
        }
      } else {
        setProductsInCart([...productsInCart, cartObj])    
      }
    }
    
return (
  <div className="mainContent">
    <h3>Våra produkter:</h3>
    <div className="productList">
    {productList.map((product) => (
      
      <div key={product.id} className="productCard">
        <img src={product.images[0]} alt="Bild"></img>
        <div className="cardInfo">
          <p>{product.name}</p>
          <p>{product.default_price.unit_amount /100} {product.default_price.currency}</p>
          {loggedIn ? <button onClick={() => addToCart(product.default_price.id)}>Lägg till i kundvagn</button> : 
          <button className="diabledButton">Logga in för att handla</button>}
        </div>
      </div>
    ))}
    </div>
    </div>  
  )
}

export default ProductList
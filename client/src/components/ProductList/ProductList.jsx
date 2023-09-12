import { ProductContext } from "../../context/productContext"
import { useContext } from 'react';
import "./ProductListStyle.css"

function ProductList() {
  
const { productList, setProductsInCart, productsInCart, saveToLS } = useContext(ProductContext)

const addToCart = (product) => {
  let cartObj = new Object()
  cartObj.id = product;
  cartObj.qty = 1;  
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
          //TODO Spara kundkorgen i LS
          setProductsInCart([...productsInCart, cartObj])   
        }
      } else {
        setProductsInCart([...productsInCart, cartObj])    
      }
      
      saveToLS() //TODO Denna funkar inte på första produkten
}



return (
  <div className="mainContent">
    <h3>Här ProductList:</h3>
    <div className="productList">
    {productList.map((product) => (
      <div key={product.id} className="productCard">
        <img src={product.images[0]} alt="Bild"></img>
        <p> {product.name}</p>
        <button onClick={() => addToCart(product.default_price.id)}>Lägg till i kundvagn</button>
      </div>
    ))}
    </div>
    </div>  
  )
}

export default ProductList

import { ProductContext } from "../../context/productContext"
import { useContext, useEffect } from 'react';
import "./ProductListStyle.css"



function ProductList() {
// const productUlRef = useRef;
  
const { productList, setProductsInCart, productsInCart } = useContext(ProductContext)


const addToCart = (id) => {
  
  setProductsInCart(productsInCart => [...productsInCart, id])    
  
  // if(productsInCart.lenght < 1){
  //   setProductsInCart(id)
  // } else {
  //   setProductsInCart(productsInCart => [...productsInCart, id])    
  // }
  
}

useEffect(()=>{
  console.log("Produkter i vagn: ", productsInCart);
},[productsInCart])

// Useeffect först
// console.log(productList);



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
    {/* <ul className="productUl" ref={productUlRef}></ul> */}
      {/* <p>{productList}</p> */}
      
    </div>
    </div>  
  )
}

export default ProductList




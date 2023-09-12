import { createContext, useState, useEffect } from 'react';

const defaultValues = {
  productList: [],
  productsInCart: [],
  setProductList: () => {},
  setProductsInCart: () => {}
}

export const ProductContext = createContext(defaultValues);

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
    
  const [productList, setProductList] = useState([]);
  const [productsInCart, setProductsInCart] = useState([])

  const saveToLS = async (productsInCart) => {
    localStorage.setItem("DiceCart", JSON.stringify(productsInCart))
    // console.log("Sparad till LS");
  }

  const performCheckout = async (productsInCart) => {
    const response = await fetch (`http://localhost:3000/api/create-checkout-session`, {
      method: "POST", 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify({
       productsInCart
      }) 
    })
    const { url, sessionId } = await response.json()
    localStorage.setItem("SessionId", sessionId)
    window.location = url;
  }
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://localhost:3000/api/products`);
      const data = await response.json();
      setProductList(data.data);      
    };
    fetchProducts();
  }, []);
 
    return (
        <ProductContext.Provider 
            value={{
              productList, 
              productsInCart,
              setProductList,
              setProductsInCart, 
              performCheckout, 
              saveToLS
            }}
            >
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider
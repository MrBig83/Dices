import { createContext, useState, useEffect, useContext } from 'react'
import { UserContext } from "./userContext";

const defaultValues = {
  productList: [],
  productsInCart: [],
  cartItemsObj: [],
  showCart: false,
  setShowCart: () => {},
  setProductList: () => {},
  setProductsInCart: () => {},
  setCartItemsObj: () => {},
}

export const ProductContext = createContext(defaultValues);

// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]) 
  const [productList, setProductList] = useState([]);
  const [showCart, setShowCart] = useState(false)
  
  const { loggedIn } = useContext(UserContext)
  
  const performCheckout = async (productsInCart) => {
    const requestBody = {
      loggedinUser: loggedIn, 
      productsInCart
    }
    const response = await fetch (`http://localhost:3000/api/create-checkout-session`, {
      method: "POST", 
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      },
      body: 
        JSON.stringify({requestBody})
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
              showCart,
              setShowCart,
              setProductList,
              setProductsInCart, 
              performCheckout,
            }}
            >
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider
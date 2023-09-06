import { createContext, useState, useEffect } from 'react';

const defaultValues = {
  productList: [],
  productsInCart: [],
  setProductList: () => {},
  setProductsInCart: () => {}
}

export const ProductContext = createContext(defaultValues);

// eslint-disable-next-line react-refresh/only-export-components
// export const useProduct = () => useContext(ProductContext)


// eslint-disable-next-line react/prop-types
export const ProductProvider = ({ children }) => {
    
  const [productList, setProductList] = useState([]);
  const [productsInCart, setProductsInCart] = useState([])
  
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(`http://localhost:3000/api/products`);
      const data = await response.json();
      // console.log(data);
      setProductList(data.data);
      // console.log(productList);
      
    };
    fetchProducts();
  }, []);
 


    return (
        <ProductContext.Provider 
            value={{
              productList, 
              productsInCart,
              setProductList,
              setProductsInCart
            }}
            >
            {children}
        </ProductContext.Provider>
    )
}
export default ProductProvider
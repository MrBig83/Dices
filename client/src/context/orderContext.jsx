import { createContext, useState, useEffect } from 'react'

const defaultValues = {
  showOrders: false,
  orderList: [],
  setOrderList: () => {},
  setShowOrders: () => {}
}

export const OrderContext = createContext(defaultValues);

// eslint-disable-next-line react/prop-types
export const OrderProvider = ({ children }) => {
  
  const [orderList, setOrderList] = useState([]);
  const [showOrders, setShowOrders] = useState(false)
  
  const userEmail = localStorage.getItem("LoggedInUserEmail")
  
  useEffect(()=> {
    if(showOrders){
      const fetchOrders = async () => {
        try {
        const response = await fetch(`http://localhost:3000/api/orders/${userEmail}`);
        if(!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()
        setOrderList(data);
      } catch (error) {
        console.error(`Fetch error: `, error)
      }
      };
      fetchOrders();
    }
  }, [showOrders])
    
    return (
        <OrderContext.Provider 
            value={{
              orderList,
              showOrders, 
              setShowOrders, 
              setOrderList
            }}
            >
            {children}
        </OrderContext.Provider>
    )
}
export default OrderProvider
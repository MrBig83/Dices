import { useContext } from "react"
// import { UserContext } from "../../context/userContext";
import { OrderContext } from "../../context/orderContext";


import "./OrdersStyle.css"


function Orders() {
    const { orderList } = useContext(OrderContext)

return (
    <div className="ordersWindow">
        <h3 className="header">Dina tidigare ordrar, {localStorage.getItem("LoggedInUser")}:</h3>
        {orderList.map((order) => (
            <div key={order.created} className="orderListItem">
            <p>Datum: {new Date(order.created * 1000).toLocaleDateString("sv-SE")}</p>
            <p>Ordersumma (sek): {order.orderTotal}</p>
            <p>Varor:</p>
            {order.products.map((item, index)=> (
                <ul key={index}>
                <li>{item.quantity}st {item.product} - {item.price}{item.currency}</li>
                </ul>
            ))}
            </div>
    ))}

    </div>
  )
}

export default Orders
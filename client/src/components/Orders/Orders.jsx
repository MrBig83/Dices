import { useContext } from "react"
import { OrderContext } from "../../context/orderContext";
import "./OrdersStyle.css"

function Orders() {
    const { orderList, setShowOrders } = useContext(OrderContext)

return (
    <div className="popupWindow">
    <div className="popupWindowHeader">
        <h3>Dina tidigare ordrar, {localStorage.getItem("LoggedInUser")}:</h3>
        <p className="closeWindow" onClick={() => setShowOrders(false)}>X</p>
        </div>
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

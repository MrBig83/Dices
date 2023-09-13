import { useContext } from "react"
// import { UserContext } from "../../context/userContext";
import { OrderContext } from "../../context/orderContext";


import "./OrdersStyle.css"


function Orders() {


    const { orderList } = useContext(OrderContext)
console.log(orderList);
console.log(orderList[0].created);

// var date = new Date(orderList[0].created * 1000);

// var formattedTime = date
// console.log(formattedTime);
//   var a = new Date(orderList[0].created * 1000);
//   var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//   var year = a.getFullYear();
//   var month = months[a.getMonth()];
//   var date = a.getDate();
//   var hour = + a.getHours();
//   var min = + a.getMinutes();
//   var sec = + a.getSeconds();
//   var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
//   console.log(time);

  var date = new Date(orderList[0].created * 1000).toLocaleDateString("sv-SE")
console.log(date)

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
                <li>{item.product} - {item.price}{item.currency}</li>
                </ul>
            ))}
            </div>
    ))}

    </div>
  )
}

export default Orders
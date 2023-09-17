import { useContext } from "react"
import { ProductContext } from "../../context/productContext";

import "./CartStyle.css"

import { UserContext } from "../../context/userContext";

function Cart() {

  const { productsInCart, productList, performCheckout, setShowCart } = useContext(ProductContext)
  const { loggedIn } = useContext(UserContext)

let cartItemsObj = productsInCart;
console.log(productsInCart);

for (let i = 0; i < cartItemsObj.length; i++) {
  const productInCart = cartItemsObj[i];
  productList.forEach(product => {
    if(product.default_price.id == productInCart.id){
      // cartItemsObj[i].prodId = product.id
      cartItemsObj[i].id = product.default_price.id
      cartItemsObj[i].name = product.name
      cartItemsObj[i].image = product.images[0]
      cartItemsObj[i].price = product.default_price.unit_amount /100
      cartItemsObj[i].curr = product.default_price.currency
    }
  });
}
console.log(productsInCart);
console.log(cartItemsObj);


  let cartSum = 0
  cartItemsObj.forEach(itemPrice => {
    cartSum = cartSum + itemPrice.price*itemPrice.qty
  });

return (
    <div className="cartWindow">
    
    
    <div className="cartWindowHeader">
    <h3>Din kundvagn, {localStorage.getItem("LoggedInUser")}:</h3>
    <button className="closeWindow" onClick={() => setShowCart(false)}>X</button>
  </div>


        
        {cartItemsObj.length < 1 ? <p>Din kundvagn är tom</p> : ""}
        {cartItemsObj.map((item, index) => (
          <div key={index} className="cartListItem">
            <img src={item.image} />
            {/* <p>{item.id}</p> */}
            {/* <p>{item.prodId}</p> */}
            <p>{item.qty} x {item.name} - {item.price}{item.curr} = {item.qty * item.price}{item.curr}</p>
          </div>
        ))}
        {cartItemsObj.length > 0 ? <p className="sum">Totalt:<strong>{cartSum}{cartItemsObj[0].curr}</strong></p> : ""}
        
        {cartItemsObj.length > 0 ? <button onClick={() => performCheckout(productsInCart, loggedIn)}>Köp</button> : 
          ""}
    </div>
  )
}

export default Cart
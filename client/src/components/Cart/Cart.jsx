import { useContext } from "react"
// import { UserContext } from "../../context/userContext";
import { ProductContext } from "../../context/productContext";


import "./CartStyle.css"


function Cart() {


    const { productsInCart, productList } = useContext(ProductContext)
// console.log(productsInCart.id);
let cartItemsObj = productsInCart
  
  


for (let i = 0; i < cartItemsObj.length; i++) {
  const productInCart = cartItemsObj[i];
  

  productList.forEach(product => {
    if(product.default_price.id == productInCart.id){
      cartItemsObj[i].name = product.name
      cartItemsObj[i].image = product.images[0]
    }
  });

}
console.log(productsInCart);
console.log(productList);
console.log(cartItemsObj);  



    
  




return (
    <div className="cartWindow">
        <h3 className="header">Din kundvagn, {localStorage.getItem("LoggedInUser")}:</h3>
        {cartItemsObj.map((item, index) => (
            <div key={index} className="cartListItem">
            
            
            <p>{item.name} {item.qty} </p>
            <img src={item.image} />
            
            </div>
    ))}

    </div>
  )
}

export default Cart
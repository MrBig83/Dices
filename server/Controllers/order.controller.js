const { initStripe } = require("../Controllers/stripe.controller")
const stripe = initStripe();
const fs = require("fs");

const getAllOrders = async (req, res) => {
    res.status(200).json("orders");
  };

const getUserOrders = async (req, res) => {
  const userOrders = []
  fs.readFile("../server/data/orders.json", (err, data) => {
    if (err) throw err;
    data = JSON.parse(data)
    data.map((order) => {
      if(order.customerEmail == req.params.email){
        userOrders.push(order)
      };
    })
    res.status(200).json(userOrders);
  })
  };

const verifySession = async (req, res) => {
  try {

    const session = await stripe.checkout.sessions.retrieve(req.body.sessionId);
    if(session.payment_status !== "paid"){
      return res.status(400).json({verified: false})
    }

    const line_items = await stripe.checkout.sessions.listLineItems(req.body.sessionId)

    const order = {
      created: session.created,
      customerName: session.customer_details.name,
      customerEmail: session.customer_details.email,
      products: line_items.data.map(item => {
        return {
          product: item.description, 
          quantity: item.quantity, 
          price: item.price.unit_amount /100, 
          totalPrice: item.price.unit_amount * item.quantity /100,
          currency: item.price.currency
        }
      }),
      orderTotal: session.amount_total /100
    }
    fs.readFile("../server/data/orders.json", (err, data) => {
      if (err) throw err;
      data = JSON.parse(data)
      data.push(order)

      fs.writeFile("../server/data/orders.json", JSON.stringify(data, null, 2), err => {
          if(err) {
              console.error(err);
          }
          res.status(200).json("New order added")
      })
    });
    res.status(200).json( {verified: true} )
  } catch (error) {
    console.error(error)
  }
}
  module.exports = {
    getAllOrders,
    getUserOrders,
    verifySession
  };
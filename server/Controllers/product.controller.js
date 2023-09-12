const { initStripe } = require("../Controllers/stripe.controller")
const stripe = initStripe();

const CLIENT_URL = "http://localhost:5173"

const getAllProducts = async (req, res) => {    
  let products = await stripe.products.list({
      limit: 10,
      expand: ["data.default_price"]
    });
    res.status(200).json(products); 
  };

  const createCheckoutSession = async (req, res) => {
    try {
      const session = await stripe.checkout.sessions.create({
          line_items: req.body.productsInCart.map((item => {
              return {
                  price: item.id, 
                  quantity: item.qty
              }
          })), 
          mode: "payment", 
          allow_promotion_codes: true,
          success_url: `${CLIENT_URL}/confirmation`, 
          cancel_url: `${CLIENT_URL}`
      });
      res.status(200).json({url: session.url, sessionId: session.id})
    } catch (error) {
        console.log(error.message);
        res.status(400).json("Det gick inte bra...")
    }
  }


  module.exports = {
    getAllProducts,
    createCheckoutSession
  };
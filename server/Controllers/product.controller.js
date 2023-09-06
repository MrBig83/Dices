const { initStripe } = require("../Controllers/stripe.controller")
const stripe = initStripe();


const getAllProducts = async (req, res) => {
  let products = await stripe.products.list({
      limit: 10,
      expand: ["data.default_price"]
    });
    res.status(200).json(products);
  };


  module.exports = {
    getAllProducts,
  };
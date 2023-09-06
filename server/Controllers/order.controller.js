
const getAllOrders = async (req, res) => {
    res.status(200).json("orders");
  };


  module.exports = {
    getAllOrders,
  };
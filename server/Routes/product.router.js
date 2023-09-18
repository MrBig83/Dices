const { Router } = require("express");

const { getAllProducts, createCheckoutSession } = require ("../Controllers/product.controller");




const productRouter = Router()
    .get("/products", getAllProducts)
    .post("/create-checkout-session", createCheckoutSession)

module.exports = { productRouter };

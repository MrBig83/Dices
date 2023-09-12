const { Router } = require("express");

const { getAllProducts, createCheckoutSession } = require ("../Controllers/product.controller");


//Middlewarez

const productRouter = Router()
    .get("/products", getAllProducts)
    .post("/create-checkout-session", createCheckoutSession)
//   .Router()
//   .post("/users/register", validate(UserCreateValidationSchema), register)
//   .post("/users/login", login)
//   .post("/users/logout", logout)
//   .get("/users/authorize", authorize);

module.exports = { productRouter };

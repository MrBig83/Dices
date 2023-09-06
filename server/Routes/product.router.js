const { Router } = require("express");

const {
    getAllProducts
} = require ("../Controllers/product.controller")

//Middlewarez

const productRouter = Router()
    .get("/products", getAllProducts)
//   .Router()
//   .post("/users/register", validate(UserCreateValidationSchema), register)
//   .post("/users/login", login)
//   .post("/users/logout", logout)
//   .get("/users/authorize", authorize);

module.exports = { productRouter };

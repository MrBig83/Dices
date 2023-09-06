const { Router } = require("express");

const {
    getAllOrders
} = require ("../Controllers/order.controller")

//Middlewarez

const orderRouter = Router()
    .get("/orders", getAllOrders)
//   .Router()
//   .post("/users/register", validate(UserCreateValidationSchema), register)
//   .post("/users/login", login)
//   .post("/users/logout", logout)
//   .get("/users/authorize", authorize);

module.exports = { orderRouter };

const { Router } = require("express");

const {
    getAllOrders, 
    verifySession
} = require ("../Controllers/order.controller")

//Middlewarez

const orderRouter = Router()
    .get("/orders", getAllOrders)
    .post("/verify-session", verifySession)
//   .Router()
//   .post("/users/register", validate(UserCreateValidationSchema), register)
//   .post("/users/login", login)
//   .post("/users/logout", logout)
//   .get("/users/authorize", authorize);

module.exports = { orderRouter };

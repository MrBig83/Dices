const { Router } = require("express");

const {
    getAllOrders, 
    getUserOrders,
    verifySession
} = require ("../Controllers/order.controller")

//Middlewarez

const orderRouter = Router()
    .get("/orders", getAllOrders)
    .get("/orders/:email", getUserOrders)
    .post("/verify-session", verifySession)
//   .Router()
//   .post("/users/register", validate(UserCreateValidationSchema), register)
//   .post("/users/login", login)
//   .post("/users/logout", logout)
//   .get("/users/authorize", authorize);

module.exports = { orderRouter };

const { Router } = require("express");

const {
    getAllOrders, 
    getUserOrders,
    verifySession
} = require ("../Controllers/order.controller")

const orderRouter = Router()
    .get("/orders", getAllOrders)
    .get("/orders/:email", getUserOrders)
    .post("/verify-session", verifySession)

module.exports = { orderRouter };

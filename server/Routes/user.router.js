const { Router } = require("express");

const {
    getAllUsers, 
    saveUser,
    loginUser, 
    logoutUser
} = require ("../Controllers/user.controller")

const userRouter = Router()
    .get("/users", getAllUsers)
    .post("/users", loginUser)
    .post("/users/logout", logoutUser)
    .post("/save", saveUser)

module.exports = { userRouter };


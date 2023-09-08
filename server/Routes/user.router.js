const { Router } = require("express");

const {
    getAllUsers, 
    saveUser,
    loginUser, 
    logoutUser
} = require ("../Controllers/user.controller")

//Middlewarez

const userRouter = Router()
    .get("/users", getAllUsers)
    .post("/users", loginUser)
    .post("/users/logout", logoutUser)
    .post("/save", saveUser)
//   .Router()
//   .post("/users/register", validate(UserCreateValidationSchema), register)
//   .post("/users/login", login)
//   .post("/users/logout", logout)
//   .get("/users/authorize", authorize);

module.exports = { userRouter };


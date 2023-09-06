const { Router } = require("express");

const {
    verifyUnique,
    getAllUsers, 
    saveUser
} = require ("../Controllers/user.controller")

//Middlewarez

const userRouter = Router()
    .get("/users", getAllUsers)
    .post("/save", verifyUnique, saveUser)
//   .Router()
//   .post("/users/register", validate(UserCreateValidationSchema), register)
//   .post("/users/login", login)
//   .post("/users/logout", logout)
//   .get("/users/authorize", authorize);

module.exports = { userRouter, saveUser, verifyUnique };

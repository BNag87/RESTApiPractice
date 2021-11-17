const { Router } = require("express");
const { addUser, login, getUsers, editUsers } = require("./user.controllers");
const { hashPassword, comparePassword, tokenAuth } = require("../Middleware");

const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", comparePassword, login);
userRouter.get("/token", tokenAuth ,login);
userRouter.get("/user", getUsers);
userRouter.put("/updateEmail", editUsers)

module.exports = userRouter;
const { Router } = require("express");
const { addUser, login } = require("./user.controllers");
const { hashPassword, comparePassword } = require("../Middleware");

const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", comparePassword, login);

module.exports = userRouter;
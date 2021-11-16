const { Router } = require("express");
const { addUser, login } = require("./user.controllers");
const { hashPassword, comparePassword, tokenAuth } = require("../Middleware");

const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", comparePassword, login);
userRouter.get("/token", tokenAuth ,login);

module.exports = userRouter;
const { Router } = require("express");
const {addUser} = require("./user.controllers");
const { hashPassword } = require("../Middleware");
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);

module.exports = userRouter;
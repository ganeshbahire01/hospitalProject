const express = require("express");
const userRouter = express.Router();
const UserModel = require("../models/User.model");
const { RegisterUserController, LoginUserController, UpdateUserController, GetAllUsersController } = require("../controllers/User.controller");

// Registration Route User Register with  email, password, mobile
userRouter.post("/register", RegisterUserController);

// POST Route for Login user using Credentials
userRouter.post("/login", LoginUserController);

userRouter.put("/update/:id", UpdateUserController);

userRouter.get("/get-all", GetAllUsersController);



module.exports = userRouter;

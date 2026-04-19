import express from "express";
import UserRouter from "./v1/user.js";
const Router = express.Router();

Router.use("/user", UserRouter);

export default Router;

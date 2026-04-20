import express from "express";
import UserRouter from "./user.js";
const Router = express.Router();

Router.use("/user", UserRouter);

export default Router;

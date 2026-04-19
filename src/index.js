import express from "express";
import http from "http";
import connectDB from "./Config/DbConfig.js";
import cors from "cors";
import appRouter from "./Routing/appRouter.js";
const app = express();
const port = 3000;
cors: {
  origin: "*";
}
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use('/api',appRouter);

app.listen(port, async() => {
    console.log('connecting to DataBase ...');
    connectDB();
})
import mongoose from "mongoose";
import { MONGO_URL } from "./ServerConfig.js";
const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Database is connected");
    } catch (error) {
        console.log("error while connection to database",error);
    }
};
export default connectDB;
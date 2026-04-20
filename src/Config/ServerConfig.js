import dotenv from "dotenv";
dotenv.config();

export const MONGO_URL = process.env.MONGOURL;
export const JWT_EXPIRY = process.env.JWT_EXPIRY;
export const JWT_SECRET = process.env.JWTSECRET;
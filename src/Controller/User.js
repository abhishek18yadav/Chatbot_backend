import { StatusCodes } from "http-status-codes";
import { successResponse, internalErrorResponse, customErrorResponse } from "../Utils/Common/ResponseObjects.js";
import { signInServices, signUpService } from "../Services/User.js";

export const signup = async (req, res) => {
  try {
    const user = await signUpService(req.body);
    return res
      .status(StatusCodes.CREATED)
      .json(successResponse(user, "User created successfully"));
  } catch (error) {
    console.log("user controller error", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};
export const signIn = async (req, res) => {
  try {
    const response = await signInServices(req.body);
    return res
      .status(StatusCodes.OK)
      .json(successResponse(response, "user signed in successfully"));
  } catch (error) {
    console.log("user signIn error", error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }
    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};

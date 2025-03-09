import express from "express";
import validate from "../middleware/validateMiddleware.js";
import { userSchema } from "../validation/userValidation.js";
import { addUser } from "../controllers/user/userController.js";

const userRoutes = express.Router();

userRoutes.post("/add", validate(userSchema), addUser);

export default userRoutes;

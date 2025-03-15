import express from "express";
import { loginUser, refreshToken } from "../controllers/auth/authController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { loginSchema } from "../validation/loginValidation.js";

const authRoutes = express.Router();

authRoutes.post("/login", validate(loginSchema), loginUser);
authRoutes.post("/refresh", refreshToken);

export { authRoutes };

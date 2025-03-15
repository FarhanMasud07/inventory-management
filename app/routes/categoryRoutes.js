import express from "express";
import { addCategory } from "../controllers/category/categoryController.js";
import {
  authenticateUser,
  authorizeRoles,
} from "../middleware/authMiddleware.js";
import { roles } from "../config/constant.js";

const categoryRoutes = express.Router();
categoryRoutes.post(
  "/add",
  authenticateUser,
  authorizeRoles([roles.SuperAdmin, roles.Admin]),
  addCategory
);

export { categoryRoutes };

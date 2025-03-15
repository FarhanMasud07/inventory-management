import express from "express";
import { validate } from "../middleware/validateMiddleware.js";
import { supplierSchema } from "../validation/supplierValidation.js";
import { addSupplier } from "../controllers/supplier/supplierController.js";
import {
  authenticateUser,
  authorizeRoles,
} from "../middleware/authMiddleware.js";
import { roles } from "../config/constant.js";

const supplierRoutes = express.Router();

supplierRoutes.post(
  "/add",
  validate(supplierSchema),
  authenticateUser,
  authorizeRoles([roles.SuperAdmin, roles.Admin]),
  addSupplier
);

export { supplierRoutes };

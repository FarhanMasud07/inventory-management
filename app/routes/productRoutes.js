import express from "express";
import {
  addProduct,
  getProducts,
  removeProduct,
} from "../controllers/product/productController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { productSchema } from "../validation/productValidation.js";
import {
  authenticateUser,
  authorizeRoles,
} from "../middleware/authMiddleware.js";
import { roles } from "../utils/constant.js";

const productRoutes = express.Router();

productRoutes.get(
  "/",
  authenticateUser,
  authorizeRoles([
    roles.SuperAdmin,
    roles.Admin,
    roles.WarehouseManager,
    roles.InventoryManager,
  ]),
  getProducts
);
productRoutes.post(
  "/add",
  validate(productSchema),
  authenticateUser,
  authorizeRoles([roles.SuperAdmin, roles.Admin]),
  addProduct
);
productRoutes.delete(
  "/:id",
  authenticateUser,
  authorizeRoles([roles.SuperAdmin]),
  removeProduct
);

export { productRoutes };

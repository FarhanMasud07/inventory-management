import express from "express";
import {
  addProduct,
  getProducts,
  removeProduct,
} from "../controllers/product/productController.js";
import validate from "../middleware/validateMiddleware.js";
import { productSchema } from "../validation/productValidation.js";

const productRoutes = express.Router();

productRoutes.get("/", getProducts);
productRoutes.post("/add", validate(productSchema), addProduct);
productRoutes.delete("/:id", removeProduct);

export default productRoutes;

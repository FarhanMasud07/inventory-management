import express from "express";
import { addStockLocation } from "../controllers/stocklocation/stockLocationController.js";
import { validate } from "../middleware/validateMiddleware.js";
import { stockLocationSchema } from "../validation/stockLocationValidation.js";

const stockLocationRoutes = express.Router();

stockLocationRoutes.post(
  "/add",
  validate(stockLocationSchema),
  addStockLocation
);

export { stockLocationRoutes };

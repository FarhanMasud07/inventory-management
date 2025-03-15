import express from "express";
import { validate } from "../middleware/validateMiddleware.js";
import { addWareHouse } from "../controllers/warehouse/wareHouseController.js";
import { wareHouseSchema } from "../validation/wareHouseValidation.js";
import {
  authenticateUser,
  authorizeRoles,
} from "../middleware/authMiddleware.js";
import { roles } from "../config/constant.js";

const wareHouseRoutes = express.Router();

wareHouseRoutes.post(
  "/add",
  validate(wareHouseSchema),
  authenticateUser,
  authorizeRoles([roles.SuperAdmin, roles.Admin, roles.WarehouseManager]),
  addWareHouse
);

export { wareHouseRoutes };

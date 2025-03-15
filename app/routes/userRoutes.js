import express from "express";
import { validate } from "../middleware/validateMiddleware.js";
import {
  rolesAndPermissionsSchema,
  userRolesSchema,
  userSchema,
} from "../validation/userValidation.js";
import {
  addUser,
  addRolesPermissions,
  addRolesToUser,
} from "../controllers/user/userController.js";
import {
  authenticateUser,
  authorizeRoles,
} from "../middleware/authMiddleware.js";
import { roles } from "../utils/constant.js";

const userRoutes = express.Router();

userRoutes.post(
  "/add",
  validate(userSchema),
  authenticateUser,
  authorizeRoles([roles.SuperAdmin]),
  addUser
);
userRoutes.post(
  "/add-roles-permissions",
  validate(rolesAndPermissionsSchema),
  authenticateUser,
  authorizeRoles([roles.SuperAdmin]),
  addRolesPermissions
);
userRoutes.post(
  "/add-user-roles",
  validate(userRolesSchema),
  authenticateUser,
  authorizeRoles([roles.SuperAdmin]),
  addRolesToUser
);

export { userRoutes };

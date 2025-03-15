import {
  assignRolesToUser,
  createRolesPermissions,
  createUser,
} from "../../services/user/userService.js";

const addUser = async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

const addRolesPermissions = async (req, res, next) => {
  try {
    const { permissions } = req.body;
    const rolePermissions = await createRolesPermissions(permissions);
    res.status(201).json(rolePermissions);
  } catch (err) {
    next(err);
  }
};

const addRolesToUser = async (req, res, next) => {
  try {
    const { userId, roles } = req.body;
    const userRoles = await assignRolesToUser(userId, roles);
    res.status(201).json(userRoles);
  } catch (err) {
    next(err);
  }
};

export { addUser, addRolesPermissions, addRolesToUser };

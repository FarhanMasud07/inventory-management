import { Op } from "sequelize";
import {
  Permission,
  Role,
  RolePermission,
  sequelize,
  User,
  UserRole,
} from "../../models/RootModel.js";

const createUser = async ({ name, email, password }) => {
  const existUser = await User.findOne({ where: { email } });
  if (existUser) throw new Error("User already exist!");
  return await User.create({ name, email, password });
};

const createRolesPermissions = async (permissions) => {
  const transaction = await sequelize.transaction();
  try {
    // ✅ Step 1: Valid roles

    const roles = Object.keys(permissions).map((item) => Number(item));
    const validRoles = await Role.findAll({
      where: {
        id: roles,
      },
      transaction,
    });
    if (validRoles.length !== roles.length)
      throw new Error("Some roles are invalid");

    const validRoleIds = new Set(validRoles.map((vr) => vr.id));

    // ✅ Step 2: Fetch valid permissions
    const validPermissions = await Permission.findAll({
      where: { id: Object.values(permissions).flat() },
      transaction,
    });
    const validPermissionIds = new Set(validPermissions.map((vp) => vp.id));

    // ✅ Step 3: Validate permissions & roles
    for (const [roleId, rolePermissions] of Object.entries(permissions)) {
      if (!validRoleIds.has(Number(roleId)))
        throw new Error(`Role ID ${roleId} is invalid.`);
      for (const permissionId of rolePermissions) {
        if (!validPermissionIds.has(permissionId)) {
          throw new Error(
            `Permission ID ${permissionId} is invalid or you need to add some permission first`
          );
        }
      }
    }

    // ✅ Step 5: Assign permissions to roles
    await RolePermission.destroy({ where: { role_id: roles }, transaction });

    //Without using extra array
    const rolePermisionData = Object.entries(permissions).flatMap(
      ([roleId, permissionIds]) =>
        permissionIds.map((permId) => ({
          role_id: Number(roleId),
          permission_id: permId,
        }))
    );

    await RolePermission.bulkCreate(rolePermisionData, { transaction });

    // ✅ Commit transaction
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw new Error(err.message);
  }
};

const assignRolesToUser = async (userId, roles) => {
  const transaction = await sequelize.transaction();
  try {
    // ✅ Valid roles excluding super admin
    const validRoles = await Role.findAll({
      where: {
        id: roles,
      },
      transaction,
    });
    if (validRoles.length !== roles.length)
      throw new Error("Some roles are invalid");

    // ✅  Assign roles to user
    await UserRole.destroy({ where: { user_id: userId }, transaction });
    await UserRole.bulkCreate(
      roles.map((roleId) => ({
        user_id: userId,
        role_id: roleId,
      })),
      { transaction }
    );

    // ✅ Commit transaction
    await transaction.commit();
  } catch (err) {
    await transaction.rollback();
    throw new Error(err.message);
  }
};

export { createUser, createRolesPermissions, assignRolesToUser };

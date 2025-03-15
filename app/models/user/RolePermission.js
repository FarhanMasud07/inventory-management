import { DataTypes } from "sequelize";
import { sequelize } from "../../config/database.js";

const RolePermission = sequelize.define(
  "role_permission",
  {
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "roles",
        key: "id",
      },
    },
    permission_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "permissions",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "role_permission",
  }
);

export default RolePermission;

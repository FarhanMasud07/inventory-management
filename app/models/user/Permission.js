import { sequelize } from "../../config/database.js";
import { DataTypes } from "sequelize";

const Permission = sequelize.define(
  "Permission",
  {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    permission_name: { type: DataTypes.STRING, allowNull: false },
  },
  { tableName: "permissions", timestamps: false }
);

export default Permission;

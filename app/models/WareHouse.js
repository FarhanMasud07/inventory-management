import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const WareHouse = sequelize.define(
  "WareHouse",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    warehouse_name: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: [2, 100],
      },
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 100],
      },
    },
  },
  {
    tableName: "warehouses",
    timestamps: false,
  }
);

export default WareHouse;

import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const SupplierToWareHouse = sequelize.define(
  "SupplierToWareHouse",
  {
    supplier_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "suppliers",
        key: "id",
      },
    },
    warehouse_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "warehouses",
        key: "id",
      },
    },
  },
  {
    timestamps: false,
    tableName: "supplier_to_warehouse",
  }
);

export default SupplierToWareHouse;

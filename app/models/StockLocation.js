import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import WareHouse from "./WareHouse.js";
import Product from "./Product.js";

const StockLocation = sequelize.define(
  "StockLocation",
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    warehouse_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: WareHouse,
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Product,
        key: "id",
      },
      onUpdate: "CASCADE",
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { min: 0 },
    },
  },
  {
    tableName: "stock_locations",
    timestamps: true,
  }
);

export default StockLocation;

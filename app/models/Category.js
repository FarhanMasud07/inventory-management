import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    category_description: {
      type: DataTypes.STRING(500),
      allowNull: true,
    },
  },
  {
    tableName: "categories",
    timestamps: false,
  }
);

export default Category;

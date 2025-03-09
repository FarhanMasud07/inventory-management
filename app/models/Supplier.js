import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

const Supplier = sequelize.define(
  "Supplier",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    supplier_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    supplier_contact_person: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supplier_phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    supplier_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    supplier_address: {
      type: DataTypes.STRING(200),
      allowNull: true,
    },
  },
  {
    tableName: "suppliers",
    timestamps: false,
  }
);

export default Supplier;

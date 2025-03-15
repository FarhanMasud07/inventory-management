import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";
import pkg from "google-libphonenumber";

const { PhoneNumberUtil } = pkg;
const phoneUtil = PhoneNumberUtil.getInstance();

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
      validate: {
        len: [2, 50],
      },
    },
    supplier_contact_person: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    supplier_phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isPhoneNumber(value) {
          try {
            const number = phoneUtil.parse(value);
            if (!phoneUtil.isValidNumber(number))
              throw new Error("Invalid phone number format.");
          } catch (err) {
            throw new Error("Invalid phone number.");
          }
        },
      },
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

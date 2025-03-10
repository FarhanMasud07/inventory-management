import { sequelize } from "../config/database.js";
import Category from "./Category.js";
import Product from "./Product.js";
import Supplier from "./Supplier.js";
import Permission from "./user/Permission.js";
import Role from "./user/Role.js";
import User from "./user/User.js";

// USER_ROLE (MANY TO MANY)
User.belongsToMany(Role, {
  through: "user_roles",
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Role.belongsToMany(User, {
  through: "user_roles",
  foreignKey: "role_id",
  onDelete: "CASCADE",
});

// PRODUCT , CATEGORY, SUPPLIER
Product.belongsTo(Category, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});
Category.hasMany(Product, {
  foreignKey: "category_id",
});

Product.belongsTo(Supplier, {
  foreignKey: "supplier_id",
  onDelete: "SET NULL",
});
Supplier.hasMany(Product, {
  foreignKey: "supplier_id",
});

// ROLE_PERMISSION (MANY TO MANY)
Role.belongsToMany(Permission, {
  through: "role_permission",
  foreignKey: "role_id",
});
Permission.belongsToMany(Role, {
  through: "role_permission",
  foreignKey: "permission_id",
});

export { sequelize, User, Product, Role, Permission, Category, Supplier };

export const syncSequlizeBasedOnEnvironment = async () => {
  await sequelize.authenticate();
  console.log("✅ Database connected successfully.");
  switch (process.env.NODE_ENV) {
    case "development":
      await sequelize.sync({ force: false, alter: true });
      break;
    case "staging":
      await sequelize.sync({ alter: true }); // ⚠️ Keeps data but may be slow
      break;
    case "production":
      console.log("✅ Running in production mode, use migrations!");
      break;
    default:
      console.log("✅ Running in default mode!");
  }
  console.log("✅ Database synced successfully.");
};

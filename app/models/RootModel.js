import { sequelize } from "../config/database.js";
import Category from "./Category.js";
import Product from "./Product.js";
import Supplier from "./Supplier.js";
import SupplierToWareHouse from "./SupplierToWareHouse.js";
import Permission from "./user/Permission.js";
import Role from "./user/Role.js";
import RolePermission from "./user/RolePermission.js";
import User from "./user/User.js";
import UserRole from "./user/UserRole.js";
import WareHouse from "./WareHouse.js";
import StockLocation from "./StockLocation.js";

// USER_ROLE (MANY TO MANY)
User.belongsToMany(Role, {
  through: UserRole,
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Role.belongsToMany(User, {
  through: UserRole,
  foreignKey: "role_id",
  onDelete: "CASCADE",
});

// SUPPLIER_WAREHOUSE (MANY TO MANY)
Supplier.belongsToMany(WareHouse, {
  through: SupplierToWareHouse,
  foreignKey: "supplier_id",
  onDelete: "CASCADE",
});
WareHouse.belongsToMany(Supplier, {
  through: SupplierToWareHouse,
  foreignKey: "warehouse_id",
  onDelete: "CASCADE",
});

// STOCK_LOCATION (MANY) TO PRODUCT (ONE)
StockLocation.belongsTo(Product, {
  foreignKey: "product_id",
  onDelete: "CASCADE",
});
Product.hasMany(StockLocation, {
  foreignKey: "product_id",
});

// STOCK_LOCATION (MANY) TO WAREHOUSE (ONE)
StockLocation.belongsTo(WareHouse, {
  foreignKey: "warehouse_id",
  onDelete: "SET NULL",
});
WareHouse.hasMany(StockLocation, {
  foreignKey: "warehouse_id",
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
  through: RolePermission,
  foreignKey: "role_id",
});
Permission.belongsToMany(Role, {
  through: RolePermission,
  foreignKey: "permission_id",
});

export {
  sequelize,
  User,
  Product,
  Role,
  Permission,
  Category,
  Supplier,
  UserRole,
  RolePermission,
  WareHouse,
  StockLocation,
  SupplierToWareHouse,
};

export const syncSequlizeBasedOnEnvironment = async () => {
  await sequelize.authenticate();
  console.log("✅ Database connected successfully.");
  switch (process.env.NODE_ENV) {
    case "development":
      //await sequelize.sync({ force: true });
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

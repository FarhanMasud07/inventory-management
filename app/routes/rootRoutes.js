import { categoryRoutes } from "./categoryRoutes.js";
import { productRoutes } from "./productRoutes.js";
import { userRoutes } from "./userRoutes.js";
import { supplierRoutes } from "./supplierRoutes.js";
import { authRoutes } from "./authRoute.js";
import { wareHouseRoutes } from "./wareHouseRoutes.js";
import { stockLocationRoutes } from "./stockLocationRoutes.js";

const initRoute = (app) => {
  // Routes
  app.use("/products", productRoutes);
  app.use("/categorys", categoryRoutes);
  app.use("/users", userRoutes);
  app.use("/suppliers", supplierRoutes);
  app.use("/auth", authRoutes);
  app.use("/warehouse", wareHouseRoutes);
  app.use("/stock-location", stockLocationRoutes);
};

export { initRoute };

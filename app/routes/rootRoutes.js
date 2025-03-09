import categoryRoutes from "./categoryRoutes.js";
import productRoutes from "./productRoutes.js";
import userRoutes from "./userRoutes.js";

const initRoute = (app) => {
  // Routes
  app.use("/products", productRoutes);
  app.use("/categorys", categoryRoutes);
  app.use("/users", userRoutes);
};

export default initRoute;

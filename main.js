import "./app/config/env.js";
import express from "express";
import cors from "cors";
import errorHandler from "./app/middleware/errorHandler.js";
import { initRoute } from "./app/routes/rootRoutes.js";
import { syncSequlizeBasedOnEnvironment } from "./app/models/RootModel.js";
import { initializePassport } from "./app/middleware/authMiddleware.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
initializePassport();

// Root Routes
initRoute(app);

// Global Error Handler
app.use(errorHandler);

(async () => {
  try {
    // await sequelize.getQueryInterface().dropTable("UserRoles");
    // await sequelize.sync({ force: true });
    await syncSequlizeBasedOnEnvironment();
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
})();

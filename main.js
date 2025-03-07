import "./app/config/env.js";
import express from "express";
import cors from "cors";
import { sequelize } from "./app/config/database.js";
import productRoutes from "./app/routes/productRoutes.js";
import errorHandler from "./app/middleware/errorHandler.js";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// Routes
app.use("/products", productRoutes);

// Global Error Handler
app.use(errorHandler);

// Start Server only after DB is Ready
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Database connected successfully.");
    if (process.env.NODE_ENV === "development") {
      await sequelize.sync({ force: true }); // ❌ Destroys data, only for dev
    } else if (process.env.NODE_ENV === "staging") {
      await sequelize.sync({ alter: true }); // ⚠️ Keeps data but may be slow
    } else {
      console.log("✅ Running in production mode, use migrations!");
    }
    console.log("✅ Database synced successfully.");
    app.listen(port, () => {
      console.log(`🚀 Server running at http://localhost:${port}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
})();

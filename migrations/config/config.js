import dotenv from "dotenv";
dotenv.config(); // Load .env variables

export default {
  development: {
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "company",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
  },
  production: {
    use_env_variable:
      "mysql://root:iUihzRESTijNuhXZcnUbZalydYucrJvR@shortline.proxy.rlwy.net:23570/railway",
    dialect: "mysql",
  },
};

import { Sequelize } from "sequelize";

const isProduction = process.env.NODE_ENV === "production";

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false, // Disable logs
    dialectOptions: isProduction
      ? {
          ssl: {
            require: true, // Force SSL connection
            rejectUnauthorized: false, // Allow self-signed certificate
          },
        }
      : { ssl: false },
  }
);
export { sequelize };

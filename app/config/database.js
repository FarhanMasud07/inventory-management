import { Sequelize } from "sequelize";
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    logging: false, // Disable logs
    dialectOptions: {
      ssl: {
        require: false, // Change to true if SSL is required
        rejectUnauthorized: false,
      },
    },
  }
);
export { sequelize };

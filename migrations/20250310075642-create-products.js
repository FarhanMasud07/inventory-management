"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("products", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    description: { type: Sequelize.TEXT, allowNull: true },
    category_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "categories", key: "id" },
      onUpdate: "SET NULL",
      onDelete: "SET NULL",
    },
    supplier_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: { model: "suppliers", key: "id" },
      onUpdate: "SET NULL",
      onDelete: "SET NULL",
    },
    price: { type: Sequelize.DECIMAL(10, 2), allowNull: false },
    stock_quantity: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    reorder_level: { type: Sequelize.INTEGER, allowNull: false },
    barcode: { type: Sequelize.STRING, allowNull: true, unique: true },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("products");
}

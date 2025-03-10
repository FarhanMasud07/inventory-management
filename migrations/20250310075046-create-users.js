"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("users", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING(100), allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    created_at: { type: Sequelize.DATE, defaultValue: Sequelize.NOW },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("users");
}

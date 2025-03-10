"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("roles", {
    id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
    role_name: { type: Sequelize.STRING, allowNull: false },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("roles");
}

"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("suppliers", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    name: { type: Sequelize.STRING, allowNull: false },
    contact_info: { type: Sequelize.STRING, allowNull: true },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("suppliers");
}

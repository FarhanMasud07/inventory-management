"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("categories", {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    catergory_name: { type: Sequelize.STRING, allowNull: false, unique: true },
    category_description: { type: Sequelize.STRING(500), allowNull: true },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("categories");
}

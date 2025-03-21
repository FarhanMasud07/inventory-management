"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("user_roles", {
    user_id: {
      type: Sequelize.INTEGER,
      references: { model: "users", key: "id" },
      onDelete: "CASCADE",
    },
    role_id: {
      type: Sequelize.INTEGER,
      references: { model: "roles", key: "id" },
      onDelete: "CASCADE",
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("user_roles");
}

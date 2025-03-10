"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("role_permission", {
    role_id: {
      type: Sequelize.INTEGER,
      references: { model: "roles", key: "id" },
    },
    permission_id: {
      type: Sequelize.INTEGER,
      references: { model: "permissions", key: "id" },
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("role_permission");
}

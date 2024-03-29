"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.down = exports.up = void 0;

const up = (queryInterface, Sequelize) => queryInterface.addColumn('users', 'deletedAt', {
  allowNull: true,
  type: Sequelize.DATE
});

exports.up = up;

const down = queryInterface => queryInterface.removeColumn('users', 'deletedAt');

exports.down = down;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class RolePermission extends _sequelize.Model {
    static associate(models) {}

  }

  RolePermission.init({
    roleName: {
      type: _sequelize.DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      primaryKey: true
    },
    permissionName: {
      type: _sequelize.DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      primaryKey: true
    }
  }, {
    modelName: 'rolePermission',
    sequelize
  }); // uncomment if new
  // (async () => {
  //     await sequelize.sync();
  // })();

  return RolePermission;
}
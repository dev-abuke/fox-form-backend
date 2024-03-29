"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class Role extends _sequelize.Model {
    static associate(models) {
      Role.hasOne(models.user, {
        foreignKey: 'appRole'
      });
      Role.belongsToMany(models.permission, {
        through: models.rolePermission
      });
    }

  }

  Role.init({
    name: {
      type: _sequelize.DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      primaryKey: true
    }
  }, {
    modelName: 'role',
    sequelize
  }); // uncomment if new
  // (async () => {
  //   await sequelize.sync();
  // })();

  return Role;
}
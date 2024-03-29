"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class StudentGuardian extends _sequelize.Model {
    static associate(models) {
      StudentGuardian.belongsTo(models.guardianType, {
        foreignKey: 'guardianTypeId'
      });
    }

  }

  StudentGuardian.init({
    id: {
      type: _sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: _sequelize.DataTypes.UUIDV4
    }
  }, {
    sequelize,
    modelName: 'studentGuardian'
  });
  return StudentGuardian;
}
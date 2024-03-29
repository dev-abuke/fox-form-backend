"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class GuardianType extends _sequelize.Model {
    static associate(models) {
      GuardianType.hasOne(models.studentGuardian, {
        foreignKey: 'guardianTypeId'
      });
    }

  }

  GuardianType.init({
    id: {
      type: _sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: _sequelize.DataTypes.UUIDV4
    },
    name: {
      type: _sequelize.DataTypes.STRING(50)
    }
  }, {
    sequelize,
    modelName: 'guardianType'
  });
  return GuardianType;
}
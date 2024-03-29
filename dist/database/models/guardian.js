"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class Guardian extends _sequelize.Model {
    static associate(models) {
      Guardian.belongsTo(models.user, {
        foreignKey: 'userId'
      });
      Guardian.belongsToMany(models.student, {
        through: models.studentGuardian
      });
    }

  }

  Guardian.init({
    id: {
      type: _sequelize.DataTypes.BIGINT,
      primaryKey: true,
      defaultValue: _sequelize.DataTypes.UUIDV4
    }
  }, {
    sequelize,
    modelName: 'guardian',
    timestamps: false
  });
  return Guardian;
}
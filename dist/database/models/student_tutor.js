"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class StudentTutor extends _sequelize.Model {
    static associate(models) {
      StudentTutor.hasMany(models.studentTutorSession);
    }

  }

  StudentTutor.init({
    id: {
      type: _sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: _sequelize.DataTypes.UUIDV4
    },
    status: _sequelize.DataTypes.STRING(20)
  }, {
    sequelize,
    modelName: 'studentTutor'
  });
  return StudentTutor;
}
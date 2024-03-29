"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class Tutor extends _sequelize.Model {
    static associate(models) {
      Tutor.belongsTo(models.user, {
        foreignKey: 'userId'
      });
      Tutor.belongsToMany(models.student, {
        through: models.studentTutor
      });
    }

  }

  Tutor.init({
    id: {
      type: _sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: _sequelize.DataTypes.UUIDV4
    },
    userId: {
      type: _sequelize.DataTypes.UUID,
      allowNull: false,
      unique: true
    },
    displayName: _sequelize.DataTypes.STRING(50),
    status: _sequelize.DataTypes.STRING(10),
    hourlyRate: _sequelize.DataTypes.FLOAT,
    CGPA: _sequelize.DataTypes.FLOAT,
    university: _sequelize.DataTypes.STRING(50),
    major: _sequelize.DataTypes.STRING(50),
    degree: _sequelize.DataTypes.STRING(50),
    yearsOfExperience: _sequelize.DataTypes.INTEGER,
    bio: _sequelize.DataTypes.STRING(500)
  }, {
    sequelize,
    modelName: 'tutor'
  });
  return Tutor;
}
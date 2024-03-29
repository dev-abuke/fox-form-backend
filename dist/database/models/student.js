"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class Student extends _sequelize.Model {
    static associate(models) {
      Student.belongsTo(models.user, {
        foreignKey: 'userId'
      });
      Student.belongsToMany(models.guardian, {
        through: models.studentGuardian
      });
      Student.belongsToMany(models.tutor, {
        through: models.studentTutor
      });
    }

  }

  Student.init({
    id: {
      type: _sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: _sequelize.DataTypes.UUIDV4
    },
    date_of_birth: _sequelize.DataTypes.DATE,
    gender: _sequelize.DataTypes.STRING(10),
    gradeLevel: _sequelize.DataTypes.TINYINT,
    school: _sequelize.DataTypes.STRING(50),
    bio: _sequelize.DataTypes.STRING(500),
    status: _sequelize.DataTypes.STRING(10)
  }, {
    sequelize,
    modelName: 'student'
  }); //  (async () => {
  //     await sequelize.sync();
  //   })();

  return Student;
}
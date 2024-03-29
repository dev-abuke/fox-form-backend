"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

function _default(sequelize) {
  class StudentTutorSession extends _sequelize.Model {
    static associate(models) {
      StudentTutorSession.belongsTo(models.guardian, {
        foreignKey: 'approved_by'
      });
      StudentTutorSession.belongsTo(models.studentTutor, {
        foreignKey: 'studentTutorId'
      });
    }

  }

  StudentTutorSession.init({
    id: {
      type: _sequelize.DataTypes.UUID,
      primaryKey: true,
      defaultValue: _sequelize.DataTypes.UUIDV4
    },
    studentTutorId: {
      type: _sequelize.DataTypes.UUID,
      allowNull: false
    },
    startTime: _sequelize.DataTypes.DATE,
    endTime: _sequelize.DataTypes.DATE,
    hours: _sequelize.DataTypes.SMALLINT,
    isApproved: _sequelize.DataTypes.BOOLEAN,
    remark: _sequelize.DataTypes.STRING(1000)
  }, {
    sequelize,
    modelName: 'studentTutorSession'
  }); // StudentTutorSession.beforeCreate((instance, options) => {
  //   if (instance.startTime > instance.endTime) {
  //     throw new Error('Start time cannot be greater than end time');
  //   }
  //   //compute the difference in hours and add to the hour field in the database
  //   instance.hours = Math.abs(instance.startTime - instance.endTime) / 36e5;
  // });

  StudentTutorSession.addHook('beforeSave', async instance => {
    if (instance.startTime > instance.endTime) {
      throw new Error('Start time cannot be greater than end time');
    } //compute the difference in hours add to the hour field in the database


    instance.hours = Math.abs(instance.startTime - instance.endTime) / 36e5;
    console.log('hours in the database before save is: ', instance.hours);
  }); // (async () => { 
  //   await sequelize.sync();
  // })();  

  return StudentTutorSession;
}
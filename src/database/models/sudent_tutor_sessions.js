import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class StudentTutorSession extends Model {
    static associate(models) {
      StudentTutorSession.belongsTo(models.guardian, { foreignKey: 'approved_by' });
      StudentTutorSession.belongsTo(models.studentTutor, { foreignKey: 'studentTutorId' });
    }
  }

  StudentTutorSession.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    studentTutorId: {
      type: DataTypes.UUID,
      allowNull: false, 
    },
    startTime: DataTypes.DATE,
    endTime: DataTypes.DATE,
    hours: DataTypes.SMALLINT,
    isApproved: DataTypes.BOOLEAN,
    remark: DataTypes.STRING(1000),

  }, {
    sequelize,
    modelName: 'studentTutorSession',
  });

  // StudentTutorSession.beforeCreate((instance, options) => {
  //   if (instance.startTime > instance.endTime) {
  //     throw new Error('Start time cannot be greater than end time');
  //   }
  //   //compute the difference in hours and add to the hour field in the database
  //   instance.hours = Math.abs(instance.startTime - instance.endTime) / 36e5;

  // });

  StudentTutorSession.addHook('beforeSave', async (instance) => {
    if (instance.startTime > instance.endTime) {
      throw new Error('Start time cannot be greater than end time');
    }
    //compute the difference in hours add to the hour field in the database
    instance.hours = Math.abs(instance.startTime - instance.endTime) / 36e5;
    console.log('hours in the database before save is: ', instance.hours);
  });
  // (async () => { 
  //   await sequelize.sync();
  // })();  
  return StudentTutorSession; 
}
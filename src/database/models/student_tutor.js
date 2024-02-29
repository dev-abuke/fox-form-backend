import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class StudentTutor extends Model {
    static associate(models) {
      StudentTutor.hasMany(models.studentTutorSession);
    }
  }

  StudentTutor.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    status: DataTypes.STRING(20),
  }, {
    sequelize,
    modelName: 'studentTutor'
  });

  return StudentTutor;
}
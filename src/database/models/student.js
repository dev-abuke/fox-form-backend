import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Student extends Model {
    static associate(models) {
      Student.belongsTo(models.user, { foreignKey: 'userId'});
      Student.belongsToMany(models.guardian, { through: models.studentGuardian });
      Student.belongsToMany(models.tutor, { through: models.studentTutor});
    }
  }

  Student.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    date_of_birth: DataTypes.DATE,
    gender: DataTypes.STRING(10),
    gradeLevel: DataTypes.TINYINT,
    school: DataTypes.STRING(50),
    bio: DataTypes.STRING(500),
    status: DataTypes.STRING(10),
  }, {
    sequelize,
    modelName: 'student',
  });
//  (async () => {
//     await sequelize.sync();
//   })();
  return Student;
}
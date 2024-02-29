import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Tutor extends Model {
    static associate(models) {
      Tutor.belongsTo(models.user, { foreignKey: 'userId' });
      Tutor.belongsToMany(models.student, { through: models.studentTutor });
    }
  }

  Tutor.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
    },
    displayName: DataTypes.STRING(50),
    status: DataTypes.STRING(10),
    hourlyRate: DataTypes.FLOAT,
    CGPA: DataTypes.FLOAT,
    university: DataTypes.STRING(50),
    major: DataTypes.STRING(50),
    degree: DataTypes.STRING(50),
    yearsOfExperience: DataTypes.INTEGER,
    bio: DataTypes.STRING(500),

  }, {
    sequelize,
    modelName: 'tutor',
  });

  return Tutor;
}
import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {

  class Guardian extends Model {
    
    static associate(models) {
      Guardian.belongsTo(models.user, { foreignKey: 'userId'});
      Guardian.belongsToMany(models.student, { through: models.studentGuardian});
    }
  }

  Guardian.init({
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

  }, {
    sequelize,
    modelName: 'guardian',
    timestamps: false,
  });

  return Guardian;
}
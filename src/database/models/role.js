import { DataTypes, Model } from 'sequelize';

export default function (sequelize) {
  class Role extends Model {

    static associate(models) {
      Role.hasOne(models.user, { foreignKey: 'appRole' });
      Role.belongsToMany(models.permission, { through: models.rolePermission });
    }
  }

  Role.init({
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },

  }, {
    modelName: 'role',
    sequelize,
  });

  // uncomment if new
  // (async () => {
  //   await sequelize.sync();
  // })();

  return Role;
}

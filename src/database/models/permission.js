import { DataTypes, Model } from 'sequelize';
const student_data = [
  {name : "read_user"},
  {name : "update_user"},
  {name : "delete_user"},
  {name : "read_tutor"},
  {name : "Max Butler", courseId: 1},
  {name : "Ryan Fisher", courseId: 3},
  {name : "Robert Gray", courseId: 2},
  {name : "Sam Lewis", courseId: 1}
]
export default function (sequelize) {
  class Permission extends Model {

    static associate(models) {
      Permission.belongsToMany(models.role, { through: models.rolePermission });
    }
  }

  Permission.init({
    name: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      primaryKey: true,
    },

  }, {
    modelName: 'permission',
    sequelize,
  });

  // Permission.belongsToMany(Role, { foreignKey: 'roleId' });
  // (async () => {
  //   await sequelize.sync();
  // })();

  return Permission;
}

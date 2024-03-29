"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _sequelize = require("sequelize");

const student_data = [{
  name: "read_user"
}, {
  name: "update_user"
}, {
  name: "delete_user"
}, {
  name: "read_tutor"
}, {
  name: "Max Butler",
  courseId: 1
}, {
  name: "Ryan Fisher",
  courseId: 3
}, {
  name: "Robert Gray",
  courseId: 2
}, {
  name: "Sam Lewis",
  courseId: 1
}];

function _default(sequelize) {
  class Permission extends _sequelize.Model {
    static associate(models) {
      Permission.belongsToMany(models.role, {
        through: models.rolePermission
      });
    }

  }

  Permission.init({
    name: {
      type: _sequelize.DataTypes.STRING(50),
      allowNull: false,
      unique: true,
      primaryKey: true
    }
  }, {
    modelName: 'permission',
    sequelize
  }); // Permission.belongsToMany(Role, { foreignKey: 'roleId' });
  // (async () => {
  //   await sequelize.sync();
  // })();

  return Permission;
}
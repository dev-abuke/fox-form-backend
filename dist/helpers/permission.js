"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.normalizeModel = exports.createPermissionsForAllModels = void 0;

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const createPermissionsForAllModels = async () => {
  const permissions = []; // Read all the files in the models directory
  // Iterate over each file (model)

  await Promise.all(Object.keys(_database.default.models).map(async model => {
    // Get the model name by removing the file extension
    // Create permissions for each CRUD operation
    const operations = ['create', 'read', 'update', 'delete'];
    await Promise.all(operations.map(async operation => {
      const permissionName = `${operation}_${model}`;
      permissions.push({
        name: permissionName
      });
    }));
  }));
  console.log("the permissions are: ", permissions);
  return permissions;
};

exports.createPermissionsForAllModels = createPermissionsForAllModels;

const normalizeModel = role => {
  if (role == 'tutor') {
    return _database.default.models.tutor;
  }

  if (role == 'student') {
    return _database.default.models.student;
  }

  if (role == 'guardian') {
    return _database.default.models.guardian;
  }
};

exports.normalizeModel = normalizeModel;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasPermission;

var _database = _interopRequireDefault(require("../database"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function hasPermission(permissionName) {
  // Get authorization header from request
  // permissionHelper.createPermissionsForAllModels();
  return async (req, res, next) => {
    // console.log("this is permission middleware", req.user.fullName);
    // const perm = await permissionHelper.createPermissionsForAllModels();
    // const blk = await db.models.permission.bulkCreate(perm);
    // if (blk) {
    //     console.log("the bulk isaaaaaa: ", blk);
    // }
    const ispermAvl = await _database.default.models.rolePermission.findOne({
      where: {
        roleName: req.user.appRole,
        permissionName
      }
    });
    console.log("fetched database here are results: ", ispermAvl);

    if (!ispermAvl) {
      return next((0, _httpErrors.default)(401, 'You do not have permission to perform this action!'));
    }

    return next();
  };
}
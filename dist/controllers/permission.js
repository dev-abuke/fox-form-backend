"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePermission = exports.updatePermission = exports.createPermission = exports.getPermissionByName = exports.getAllPermissions = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Get all permissions
const getAllPermissions = async (req, res, next) => {
  try {
    const permissions = await _database.default.find();
    res.status(200).json(permissions);
  } catch (err) {
    next(err);
  }
}; // Get a single permission by ID


exports.getAllPermissions = getAllPermissions;

const getPermissionByName = async (req, res, next) => {
  try {
    const permission = await _database.default.findById(req.params.name);

    if (!permission) {
      return next((0, _httpErrors.default)(400, 'Permission not found'));
    }

    res.status(200).json(permission);
  } catch (err) {
    next(err);
  }
}; // Create a new permission


exports.getPermissionByName = getPermissionByName;

const createPermission = async (req, res, next) => {
  try {
    const {
      name
    } = req.body;
    const permissionName = await _database.default.models.permission.findOne({
      where: {
        name
      }
    });

    if (permissionName) {
      return next((0, _httpErrors.default)(400, 'Permission already exists!'));
    }

    const permission = await _database.default.models.permission.create(req.body, {
      fields: ['name']
    });
    res.status(200).json({
      msg: "Permission created succesfully",
      Permission: permission.name
    });
  } catch (err) {
    next(err);
  }
}; // Update an existing permission


exports.createPermission = createPermission;

const updatePermission = async (req, res, next) => {
  try {
    const {
      name
    } = req.body;
    const permissionName = await _database.default.models.permission.findOne({
      where: {
        name
      }
    });

    if (!permissionName) {
      return next((0, _httpErrors.default)(400, 'Permission does not exist!'));
    }

    const permission = await _database.default.models.permission.update(req.body, {
      fields: ['name']
    });
    res.status(200).json({
      msg: "Permission updated succesfully",
      Permission: permission.name
    });
  } catch (err) {
    next(err);
  }
}; // Delete a permission


exports.updatePermission = updatePermission;

const deletePermission = async (req, res, next) => {
  try {
    const {
      name
    } = req.body;
    const permissionName = await _database.default.models.permission.findOne({
      where: {
        name
      }
    });

    if (!permissionName) {
      return next((0, _httpErrors.default)(400, 'Permission Does Not exist!'));
    }

    const permission = await _database.default.models.permission.destroy(req.body, {
      fields: ['name']
    });
    res.status(200).json({
      msg: "Permission removed succesfully",
      Permission: permission.name
    });
  } catch (err) {
    next(err);
  }
};

exports.deletePermission = deletePermission;
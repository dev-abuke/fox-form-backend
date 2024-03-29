"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRole = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _database = _interopRequireDefault(require("../database"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * POST /auth/role
 * Create role request
 */
const createRole = async (req, res, next) => {
  try {
    const {
      name
    } = req.body; // Find role by name 

    const roleName = await _database.default.models.role.findOne({
      where: {
        name
      }
    });

    if (roleName) {
      return next((0, _httpErrors.default)(400, 'Role name already exists!'));
    }

    const role = await _database.default.models.role.create(req.body, {
      fields: ['name']
    });
    return res.status(200).json({
      msg: "Role created succesfully",
      RoleName: role.name
    });
  } catch (err) {
    return next(err);
  }
};

exports.createRole = createRole;
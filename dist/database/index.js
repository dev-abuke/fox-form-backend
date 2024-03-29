"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = require("sequelize");

var config = _interopRequireWildcard(require("../config/sequelize"));

var _user = _interopRequireDefault(require("./models/user"));

var _role = _interopRequireDefault(require("./models/role"));

var _permission = _interopRequireDefault(require("./models/permission"));

var _tutor = _interopRequireDefault(require("./models/tutor"));

var _student = _interopRequireDefault(require("./models/student"));

var _guardian = _interopRequireDefault(require("./models/guardian"));

var _student_tutor = _interopRequireDefault(require("./models/student_tutor"));

var _sudent_tutor_sessions = _interopRequireDefault(require("./models/sudent_tutor_sessions"));

var _student_guardian = _interopRequireDefault(require("./models/student_guardian"));

var _guardian_type = _interopRequireDefault(require("./models/guardian_type"));

var _role_permission = _interopRequireDefault(require("./models/role_permission"));

var _otp = _interopRequireDefault(require("./models/otp"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import models
// Configuration
const env = process.env.NODE_ENV;
const sequelizeConfig = config[env]; // Create sequelize instance

const sequelize = new _sequelize.Sequelize(sequelizeConfig); //  sequelize.sync();
// Import all model files

const modelDefiners = [_user.default, _role.default, _student.default, _permission.default, _role_permission.default, _otp.default, _tutor.default, _guardian.default, _student_guardian.default, _guardian_type.default, _student_tutor.default, _sudent_tutor_sessions.default]; // eslint-disable-next-line no-restricted-syntax

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
} // Associations


Object.keys(sequelize.models).forEach(modelName => {
  if (sequelize.models[modelName].associate) {
    sequelize.models[modelName].associate(sequelize.models);
  }
});
var _default = sequelize;
exports.default = _default;
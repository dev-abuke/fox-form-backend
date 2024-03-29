"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.roleValidation = void 0;

var _expressValidator = require("express-validator");

const roleValidation = [(0, _expressValidator.body)('name').isIn(['admin', 'tutor', 'guardian', 'student']).withMessage("Please provide a valid role name!").exists().withMessage("Role name must exist!")];
exports.roleValidation = roleValidation;
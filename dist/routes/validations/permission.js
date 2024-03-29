"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.permissionValidation = void 0;

var _expressValidator = require("express-validator");

const permissionValidation = [(0, _expressValidator.body)('name').exists().withMessage("Permission name must exist!")];
exports.permissionValidation = permissionValidation;
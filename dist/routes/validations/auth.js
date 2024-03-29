"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePasswordRules = exports.updateProfileRules = exports.registerRules = exports.otpRules = exports.loginWithPhoneRules = exports.loginRules = void 0;

var _expressValidator = require("express-validator");

const loginRules = [(0, _expressValidator.body)('email').isEmail().withMessage("Entry Must Be an Email").exists("Email Must Exist"), (0, _expressValidator.body)('password').exists("Password Must Exist")];
exports.loginRules = loginRules;
const loginWithPhoneRules = [(0, _expressValidator.body)('phoneNumber').isMobilePhone().exists("Phone Number Must Exist"), (0, _expressValidator.body)('password').exists("Password Must Exist")];
exports.loginWithPhoneRules = loginWithPhoneRules;
const otpRules = [(0, _expressValidator.body)('otp').isNumeric().withMessage('Please provide a valid OTP').isLength({
  min: 6,
  max: 6
}).withMessage('OTP must be 6 digits').exists("OTP must exist!")];
exports.otpRules = otpRules;
const registerRules = [(0, _expressValidator.body)('firstName').exists(), (0, _expressValidator.body)('lastName').exists(), (0, _expressValidator.body)('email').isEmail().exists(), (0, _expressValidator.body)('phoneNumber').isMobilePhone().exists(), (0, _expressValidator.body)('appRole').isIn(['admin', 'tutor', 'guardian', 'student']).withMessage('Please provide a valid role ID').exists().withMessage("Role ID must exist!"), (0, _expressValidator.body)('gender').isIn(['male', 'female']).withMessage("Please provide your gender in one of: 'Male', 'Female'").exists().withMessage("Adding your sex helps us pair you with best match"), (0, _expressValidator.body)('password').isLength({
  min: 6
}).exists()];
exports.registerRules = registerRules;
const updateProfileRules = [(0, _expressValidator.body)('firstName').optional(), (0, _expressValidator.body)('lastName').optional(), (0, _expressValidator.body)('email').isEmail().optional()];
exports.updateProfileRules = updateProfileRules;
const changePasswordRules = [(0, _expressValidator.body)('current').exists(), (0, _expressValidator.body)('password').isLength({
  min: 6
}).exists()];
exports.changePasswordRules = changePasswordRules;
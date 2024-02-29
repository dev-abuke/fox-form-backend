import { body } from 'express-validator';

export const loginRules = [
  body('email').isEmail().withMessage("Entry Must Be an Email").exists("Email Must Exist"),
  body('password').exists("Password Must Exist"),
];
export const loginWithPhoneRules = [
  body('phoneNumber').isMobilePhone().exists("Phone Number Must Exist"),
  body('password').exists("Password Must Exist"),
];
export const otpRules = [
  body('otp')
  .isNumeric()
  .withMessage('Please provide a valid OTP')
  .isLength({ min: 6, max: 6 })
  .withMessage('OTP must be 6 digits')
  .exists("OTP must exist!"),
];

export const registerRules = [
  body('firstName').exists(),
  body('lastName').exists(),
  body('email').isEmail().exists(),
  body('phoneNumber').isMobilePhone().exists(),
  body('appRole')
  .isIn(['admin', 'tutor', 'guardian', 'student'])
  .withMessage('Please provide a valid role ID')
  .exists()
  .withMessage("Role ID must exist!"),
  body('gender')
  .isIn(['male', 'female'])
  .withMessage("Please provide your gender in one of: 'Male', 'Female'")
  .exists()
  .withMessage("Adding your sex helps us pair you with best match"),
  body('password').isLength({ min: 6 }).exists(),
];

export const updateProfileRules = [
  body('firstName').optional(),
  body('lastName').optional(),
  body('email').isEmail().optional(),
];

export const changePasswordRules = [
  body('current').exists(),
  body('password').isLength({ min: 6 }).exists(),
];

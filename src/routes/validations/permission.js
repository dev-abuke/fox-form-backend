import { body } from 'express-validator';

export const permissionValidation = [
  body('name')
  .exists()
  .withMessage("Permission name must exist!"),
];

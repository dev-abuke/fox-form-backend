import { body } from 'express-validator';

export const roleValidation = [
    body('name')
    .isIn(['admin', 'tutor', 'guardian', 'student'])
    .withMessage("Please provide a valid role name!")
    .exists()
    .withMessage("Role name must exist!"),
  ];
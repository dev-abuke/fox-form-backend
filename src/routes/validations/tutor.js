import { body, header } from 'express-validator';

export const tutorUpdate = [
  body('displayName').optional(),
  body('status').optional(),
  body('hourlyRate').isNumeric().optional(),
  body('CGPA').isNumeric().optional(),
  body('university').optional(),
  body('major').optional(),
  body('degree').optional(),
  body('yearsOfExperience').isNumeric().optional(),
  body('bio').optional(),
];
export const tutorLogSession = [
  body('studentTutorId').exists(),
  body('startTime').exists(),
  body('endTime').exists(),
  body('remark').isString().exists(),
];
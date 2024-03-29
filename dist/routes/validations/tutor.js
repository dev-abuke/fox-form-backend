"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tutorLogSession = exports.tutorUpdate = void 0;

var _expressValidator = require("express-validator");

const tutorUpdate = [(0, _expressValidator.body)('displayName').optional(), (0, _expressValidator.body)('status').optional(), (0, _expressValidator.body)('hourlyRate').isNumeric().optional(), (0, _expressValidator.body)('CGPA').isNumeric().optional(), (0, _expressValidator.body)('university').optional(), (0, _expressValidator.body)('major').optional(), (0, _expressValidator.body)('degree').optional(), (0, _expressValidator.body)('yearsOfExperience').isNumeric().optional(), (0, _expressValidator.body)('bio').optional()];
exports.tutorUpdate = tutorUpdate;
const tutorLogSession = [(0, _expressValidator.body)('studentTutorId').exists(), (0, _expressValidator.body)('startTime').exists(), (0, _expressValidator.body)('endTime').exists(), (0, _expressValidator.body)('remark').isString().exists()];
exports.tutorLogSession = tutorLogSession;
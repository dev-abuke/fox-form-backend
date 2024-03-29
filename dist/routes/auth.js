"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = require("express");

var authController = _interopRequireWildcard(require("../controllers/auth"));

var formController = _interopRequireWildcard(require("../controllers/form"));

var roleController = _interopRequireWildcard(require("../controllers/role"));

var permissionController = _interopRequireWildcard(require("../controllers/permission"));

var tutorController = _interopRequireWildcard(require("../controllers/tutor"));

var roleValidations = _interopRequireWildcard(require("./validations/role"));

var authValidations = _interopRequireWildcard(require("./validations/auth"));

var formvalidation = _interopRequireWildcard(require("./validations/form"));

var permissionValidation = _interopRequireWildcard(require("./validations/permission"));

var tutorValidation = _interopRequireWildcard(require("./validations/tutor"));

var _middleware = require("../middleware");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const router = (0, _express.Router)();
router.post('/form', (0, _middleware.validate)(formvalidation.submitFormRules), formController.sendMail); // router.post('/login/bot/phone', validate(authValidations.loginWithPhoneRules), authController.loginWithPhone);
// router.post('/verify/email', isAuthenticated, validate(authValidations.otpRules), authController.verifyOTP);
// router.post('/verify/resend-otp', isAuthenticated, authController.resendOTP);
// router.post('/role', validate(roleValidations.roleValidation), roleController.createRole);
// // router.post('/permission', validate(permissionValidation.permissionValidation), permissionController.createPermission);
// router.post('/register', validate(authValidations.registerRules), authController.register);
// router.route('/me')
//   .get(isAuthenticated, authController.getCurrentUser)
//   .put(isAuthenticated, validate(authValidations.updateProfileRules), authController.updateCurrentUser)
//   .delete(isAuthenticated, authController.deleteCurrentUser);
// router.route('/tutor/student')
//   .get(isAuthenticated, hasPermission('read_studentTutor'), tutorController.getMyStudents)
// router.route('/tutor/log_session')
//   .post(
//     isAuthenticated,
//     hasPermission('create_studentTutorSession'),
//     validate(tutorValidation.tutorLogSession),
//     tutorController.logSession
//   )
// router.route('/permission')
//   .get(isAuthenticated, hasPermission("read_permission"), permissionController.getAllPermissions)
//   .post(isAuthenticated, hasPermission("create_permission"), validate(permissionValidation.permissionValidation), permissionController.createPermission)
//   .put(isAuthenticated, hasPermission("update_permission"), validate(permissionValidation.permissionValidation), permissionController.updatePermission)
//   .delete(isAuthenticated, hasPermission("delete_permission"), validate(permissionValidation.permissionValidation), permissionController.deletePermission);
// router.route('/tutor')
//   .get(
//     isAuthenticated,
//     hasPermission("read_tutor"),
//     tutorController.getTutor)
//   .put(
//     isAuthenticated,
//     hasPermission("update_tutor"),
//     validate(tutorValidation.tutorUpdate),
//     tutorController.updateTutor)
//   // .put(isAuthenticated, permission("update_tutor"), validate(permissionValidation.permissionValidation), tutorController.deletePermission)
//   // .delete(isAuthenticated, permission("delete_tutor"), validate(permissionValidation.permissionValidation), tutorController.deletePermission)
//   ;
// router.put('/me/password',
//   isAuthenticated,
//   validate(authValidations.changePasswordRules),
//   authController.updatePassword);

var _default = router;
exports.default = _default;
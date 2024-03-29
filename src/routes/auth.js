import { Router } from 'express';

import * as authController from '@/controllers/auth';
import * as formController from '@/controllers/form';
import * as roleController from '@/controllers/role';
import * as permissionController from '@/controllers/permission';
import * as tutorController from '@/controllers/tutor';
import * as roleValidations from '@/routes/validations/role';
import * as authValidations from '@/routes/validations/auth';
import * as formvalidation from '@/routes/validations/form';
import * as permissionValidation from '@/routes/validations/permission';
import * as tutorValidation from '@/routes/validations/tutor';
import { isAuthenticated, validate, hasPermission } from '@/middleware';

const router = Router();

router.post('/form', validate(formvalidation.submitFormRules), formController.sendMail);

// router.post('/login/bot/phone', validate(authValidations.loginWithPhoneRules), authController.loginWithPhone);

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

export default router;

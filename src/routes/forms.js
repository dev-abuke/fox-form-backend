import { Router } from 'express';

import * as formController from '@/controllers/form';
import * as formvalidation from '@/routes/validations/form';
import { validate } from '@/middleware';

const router = Router();

router.post('/book/vendor', validate(formvalidation.vendorBookingValidation), formController.bookVendor);

router.post('/book/package', validate(formvalidation.packageBookingValidation), formController.bookPackage);

router.post('/register/vendor', validate(formvalidation.vendorRegistrationValidation), formController.registerVendor);

export default router;

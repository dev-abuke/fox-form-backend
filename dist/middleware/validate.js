"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _expressValidator = require("express-validator");

function _default(validations) {
  return async (req, res, next) => {
    await Promise.all(validations.map(validation => validation.run(req)));
    const errors = (0, _expressValidator.validationResult)(req);

    if (errors.isEmpty()) {
      return next();
    }

    return res.status(422).json({
      message: 'Validation errors',
      errors: errors.array()
    });
  };
}
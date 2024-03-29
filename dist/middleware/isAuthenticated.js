"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _httpErrors = _interopRequireDefault(require("http-errors"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

async function _default(req, res, next) {
  if (!req.user) {
    const error = (0, _httpErrors.default)(401, 'Not authenticated!');
    return next(error);
  }

  return next();
}
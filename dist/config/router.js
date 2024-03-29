"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _auth = _interopRequireDefault(require("../routes/auth"));

var _routes = _interopRequireDefault(require("../routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(app) {
  app.use('/', _routes.default);
  app.use('/auth', _auth.default);
}
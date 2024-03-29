"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _node = require("@sentry/node");

function _default(req, res, next) {
  if (req.user) {
    (0, _node.configureScope)(scope => {
      scope.setUser({
        id: req.user.id,
        email: req.user.email
      });
    });
  }

  next();
}
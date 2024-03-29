"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _redis = _interopRequireDefault(require("../libs/redis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _default(cache, evalString = null) {
  return (req, res, next) => {
    // Cache name
    let cacheName = cache;

    if (evalString) {
      cacheName += `:${eval(evalString)}`;
    }

    req.cacheName = cacheName;

    if (_redis.default.connected) {
      return _redis.default.get(cacheName, (err, data) => {
        if (err) {
          return res.status(500).send(err);
        }

        if (data !== null) {
          const parsedData = JSON.parse(data);
          return res.status(200).send(parsedData);
        }

        return next();
      });
    }

    return next();
  };
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _redis = _interopRequireDefault(require("redis"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Create redis client instance
 */
const redisClient = _redis.default.createClient({
  url: process.env.REDIS_URI
});

redisClient.on('connect', () => {// Successfully connected to redis!
});
redisClient.on('error', err => {// TODO: There is an error caused by redis. Send it to monitoring tool!!
  // eslint-disable-next-line no-console
  // console.log('Redis error: ', err);
});
var _default = redisClient;
exports.default = _default;
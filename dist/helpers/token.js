"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateOTP = exports.verifyToken = exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generateToken = (data, expiresIn = '1h') => {
  const options = {
    expiresIn
  };
  return _jsonwebtoken.default.sign(data, process.env.JWT_SECRET_KEY, options);
};

exports.generateToken = generateToken;

const verifyToken = token => _jsonwebtoken.default.verify(token, process.env.JWT_SECRET_KEY);

exports.verifyToken = verifyToken;

const generateOTP = () => Math.floor(100000 + Math.random() * 900000);

exports.generateOTP = generateOTP;
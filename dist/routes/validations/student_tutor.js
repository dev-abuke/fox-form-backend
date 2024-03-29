"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createTweetRules = exports.listTweetsRules = void 0;

var _expressValidator = require("express-validator");

const listTweetsRules = [(0, _expressValidator.query)('page').optional().isInt().toInt(), (0, _expressValidator.query)('perPage').optional().isInt().toInt()];
exports.listTweetsRules = listTweetsRules;
const createTweetRules = [(0, _expressValidator.body)('').isLength({
  max: 140
}).exists()];
exports.createTweetRules = createTweetRules;
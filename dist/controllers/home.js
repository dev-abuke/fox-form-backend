"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.healthCheck = exports.index = void 0;

/**
 * GET /
 * Home page
 */
const index = (req, res) => res.send('We see everything! Now why are you here?');
/**
 * GET /health
 * Health check
 */


exports.index = index;

const healthCheck = (req, res) => res.json({
  Bravo: "You are healthy! 'I abubeker shamil declare that you are super fine'",
  success: true
});

exports.healthCheck = healthCheck;
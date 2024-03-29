"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _morgan = _interopRequireDefault(require("morgan"));

var _express = _interopRequireDefault(require("express"));

var _compression = _interopRequireDefault(require("compression"));

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var Sentry = _interopRequireWildcard(require("@sentry/node"));

var configs = _interopRequireWildcard(require("./config"));

var _middleware = require("./middleware");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const {
  NODE_ENV
} = process.env;
const app = (0, _express.default)(); // Initialize sentry

if (NODE_ENV !== 'development') {
  // configuration
  Sentry.init(configs.sentryConfig(app)); // handlers

  app.use(Sentry.Handlers.requestHandler());
  app.use(Sentry.Handlers.tracingHandler());
} // Required middleware list


app.use((0, _morgan.default)('dev'));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: false
}));
app.use((0, _cors.default)(configs.corsConfig));
app.use((0, _compression.default)(configs.compressionConfig));
app.use((0, _cookieParser.default)()); // Custom middleware list

app.use(_middleware.authenticationMiddleware);

if (NODE_ENV !== 'development') {
  app.use(_middleware.sentryMiddleware); // This should be loaded after authentication middleware.
} // Load router paths


configs.routerConfig(app); // catch 404 and forward to error handler

app.use((req, res, next) => {
  next((0, _httpErrors.default)(404));
}); // Sentry error logging - error handler

if (NODE_ENV !== 'development') {
  app.use(Sentry.Handlers.errorHandler());
} // error handler
// eslint-disable-next-line no-unused-vars


app.use((err, req, res, next) => {
  res.status(err.status || 500).json(err);
});
var _default = app;
exports.default = _default;
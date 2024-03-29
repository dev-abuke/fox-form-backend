"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updatePassword = exports.deleteCurrentUser = exports.updateCurrentUser = exports.getCurrentUser = exports.register = exports.resendOTP = exports.verifyOTP = exports.loginWithPhone = exports.login = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _database = _interopRequireDefault(require("../database"));

var _helpers = require("../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * POST /auth/login
 * Login request
 */
const login = async (req, res, next) => {
  try {
    const {
      email,
      password
    } = req.body; // Find user by email address

    const user = await _database.default.models.user.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return next((0, _httpErrors.default)(400, "There is no user with this email address!"));
    }

    console.log("Wait Checking Password ", user); // Check user password

    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
      return next((0, _httpErrors.default)(400, "Incorrect password!"));
    }

    console.log("here comes the ", user); // Generate and return token

    const token = user.generateToken();
    const refreshToken = user.generateToken("2h");
    return res.status(200).json({
      token,
      refreshToken
    });
  } catch (err) {
    return next(err);
  }
};
/**
 * POST /auth/login/phone
 * Login request
 */


exports.login = login;

const loginWithPhone = async (req, res, next) => {
  try {
    const {
      phoneNumber,
      password
    } = req.body; // Find user by email address

    console.log("The Phone Number is ", phoneNumber);
    const user = await _database.default.models.user.findOne({
      where: {
        phoneNumber
      }
    });

    if (!user) {
      return next((0, _httpErrors.default)(400, "There is no user with this Phone Number!"));
    }

    console.log("Wait Checking Password ", user); // Check user password

    const isValidPassword = await user.validatePassword(password);

    if (!isValidPassword) {
      return next((0, _httpErrors.default)(400, "Incorrect password!"));
    }

    console.log("here comes the ", user); // Generate and return token

    const token = user.generateBotToken();
    return res.status(200).json({
      token
    });
  } catch (err) {
    return next(err);
  }
};

exports.loginWithPhone = loginWithPhone;

const verifyOTP = async (req, res, next) => {
  console.log("The request user in veryfy is: ");

  try {
    const {
      otp
    } = req.body;
    const id = req.user.id;

    if (req.user.isEmailVerified) {
      return next((0, _httpErrors.default)(400, "User already verified!"));
    }

    const otpdb = await _database.default.models.otp.findOne({
      where: {
        userId: id,
        otp
      }
    });

    if (!otpdb) {
      return next((0, _httpErrors.default)(400, "OTP Could not be verified!"));
    }

    console.log("The otpdb is: ", otpdb); // Check if the OTP has expired

    const now = new Date();

    if (now > otpdb.expiresAt) {
      return next((0, _httpErrors.default)(400, "OTP has expired!"));
    } // Update user email verification status


    await _database.default.models.user.update({
      isEmailVerified: true
    }, {
      where: {
        id
      }
    });
    return res.status(200).json({
      message: "OTP verified successfully"
    });
  } catch (err) {
    console.log("the error in verify otp: ", err);
    return next(err);
  }
};

exports.verifyOTP = verifyOTP;

const resendOTP = async (req, res, next) => {
  // console.log("The request user in veryfy is: ");
  try {
    const id = req.user.id;

    if (req.user.isEmailVerified) {
      return next((0, _httpErrors.default)(400, "User already verified! No Need to Send Again."));
    }

    const otpdb = await _database.default.models.otp.findOne({
      where: {
        userId: id,
        otp
      }
    });

    if (!otpdb) {
      return next((0, _httpErrors.default)(400, "OTP Could not be verified!"));
    }

    console.log("The otpdb is: ", otpdb); // Check if the OTP has expired

    const now = new Date();

    if (now < otpdb.expiresAt) {
      return next((0, _httpErrors.default)(400, "OTP Must Expire Before Resending!"));
    }

    const expiresAt = new Date(now.getTime() + 3 * 60000).toISOString();

    const newOtp = _helpers.tokenHelper.generateOTP(); // Update otp verification


    const newotp = await _database.default.models.otp.update({
      otp: newOtp,
      expiresAt
    }, {
      where: {
        userId: id
      }
    });
    const payload = {
      subject: "Your New OTP for Kelem Tutors!",
      html: `Please use <b>${newotp.getDataValue("otp")}<b/>. to get started.`
    };

    _helpers.mailHelper.sendMail(payload);

    return res.status(200).json({
      message: "OTP Resend Successful"
    });
  } catch (err) {
    console.log("the error in verify otp: ", err);
    return next(err);
  }
};
/**
 * POST /auth/register
 * Register request
 */


exports.resendOTP = resendOTP;

const register = async (req, res, next) => {
  try {
    // Create user
    const user = await _database.default.models.user.create(req.body, {
      fields: ["firstName", "lastName", "email", "password", "appRole", "phoneNumber", "gender"]
    }); // console.log("The user creted is: ", user);

    if (user) {
      await _database.default.models[user.dataValues.appRole].create({
        userId: user.dataValues.id
      }, {
        fields: ["userId"]
      });
    } // Generate and return tokens


    const token = user.generateToken();
    const refreshToken = user.generateToken("2h");
    res.status(201).json({
      token,
      refreshToken
    });
  } catch (err) {
    console.log("the error in register: ", err);
    res.status(400).json({
      message: "Email or Phone already in use"
    });
    next();
  }
};
/**
 * GET /auth/me
 * Get current user
 */


exports.register = register;

const getCurrentUser = async (req, res, next) => {
  try {
    delete req.user.dataValues.password;
    res.json(req.user);
  } catch (err) {
    next(err);
  }
};
/**
 * PUT /auth/me
 * Update current user
 */


exports.getCurrentUser = getCurrentUser;

const updateCurrentUser = async (req, res, next) => {
  try {
    await req.user.update(req.body, {
      fields: ["firstName", "lastName", "email"]
    });
    res.status(200).json({
      success: true
    });
  } catch (err) {
    next(err);
  }
};
/**
 * DELETE /auth/me
 * Delete current user
 */


exports.updateCurrentUser = updateCurrentUser;

const deleteCurrentUser = async (req, res, next) => {
  try {
    await req.user.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
/**
 * PUT /auth/me/password
 * Update password of current user
 */


exports.deleteCurrentUser = deleteCurrentUser;

const updatePassword = async (req, res, next) => {
  try {
    const {
      current,
      password
    } = req.body; // Check user password

    const isValidPassword = await req.user.validatePassword(current);

    if (!isValidPassword) {
      return next((0, _httpErrors.default)(400, "Incorrect password!"));
    } // Update password


    req.user.password = password;
    await req.user.save();
    return res.json({
      success: true
    });
  } catch (err) {
    return next(err);
  }
};

exports.updatePassword = updatePassword;
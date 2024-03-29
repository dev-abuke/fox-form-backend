"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logSession = exports.getMyStudents = exports.getTutor = exports.updateTutor = void 0;

var _httpErrors = _interopRequireDefault(require("http-errors"));

var _database = _interopRequireDefault(require("../database"));

var _sequelize = require("sequelize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * GET /auth/me
 * Get current user
 */
const updateTutor = async (req, res, next) => {
  console.log("the app role in user is: ", req.user.isAdmin());

  try {
    // const withid = {...req.body, userId: req.user.id}
    const tutor = await _database.default.models.tutor.update(req.body, {
      where: {
        userId: req.user.id
      }
    });
    res.status(201).json({
      "msg: tutor update succccc": tutor
    });
  } catch (err) {
    next(err);
  }
};

exports.updateTutor = updateTutor;

const getTutor = async (req, res, next) => {
  // console.log("the app role in user is: ", req.user.isAdmin())
  try {
    // const withid = {...req.body, userId: req.user.id}
    const tutor = await _database.default.models.tutor.findOne({
      where: {
        userId: req.user.id
      },
      include: {
        model: _database.default.models.user,
        attributes: ['firstName', 'lastName', 'email', 'phoneNumber']
      }
    });
    res.status(201).json({
      "msg: tutor get succccc": tutor
    });
  } catch (err) {
    next(err);
  }
};

exports.getTutor = getTutor;

const getMyStudents = async (req, res, next) => {
  console.log("the user in tutor get students request is: ", req.user);

  if (req.user.appRole !== 'tutor') {
    return next((0, _httpErrors.default)(401, 'Not Authorized!'));
  }

  try {
    // const withid = {...req.body, userId: req.user.id}
    const studenttut = await _database.default.models.tutor.findOne({
      where: {
        id: req.user.tutor.id
      },
      include: {
        model: _database.default.models.student,
        include: {
          model: _database.default.models.user
        }
      } // attributes: ['id', 'userId']

    });
    const resp = studenttut.students.map(student => {
      return {
        fullName: student.user.firstName + " " + student.user.lastName,
        studentTutorId: student.studentTutor.id
      };
    });
    console.log("the index in stuuuuu is: ", studenttut);
    res.status(201).json({
      "data": resp
    });
  } catch (err) {
    console.error("the error in get student is: ", err);
    next(err);
  }
};

exports.getMyStudents = getMyStudents;

const logSession = async (req, res, next) => {
  if (req.user.appRole !== 'tutor') {
    return next((0, _httpErrors.default)(401, 'Not Authorized!'));
  }

  try {
    const session = await _database.default.models.studentTutorSession.create(req.body, {
      fields: ['studentTutorId', 'startTime', 'endTime', "remark"]
    });
    res.status(201).json({
      "success": true,
      "sessionId": session.id
    });
  } catch (err) {
    console.error("the error in get student is: ", err);
    next(err);
  }
};

exports.logSession = logSession;
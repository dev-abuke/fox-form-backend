import createError from 'http-errors';

import db from '@/database';
import { where } from 'sequelize';

/**
 * GET /auth/me
 * Get current user
 */
export const updateTutor = async (req, res, next) => {

  console.log("the app role in user is: ", req.user.isAdmin())

  try {
    // const withid = {...req.body, userId: req.user.id}
    const tutor = await db.models.tutor.update(req.body, { where: { userId: req.user.id } });

    res.status(201).json({ "msg: tutor update succccc": tutor });
  } catch (err) {
    next(err);
  }
};


export const getTutor = async (req, res, next) => {

  // console.log("the app role in user is: ", req.user.isAdmin())

  try {
    // const withid = {...req.body, userId: req.user.id}
    const tutor = await db.models.tutor.findOne({
      where: {
        userId: req.user.id
      },
      include: {
        model: db.models.user,
        attributes: ['firstName', 'lastName', 'email', 'phoneNumber']
      }
    });

    res.status(201).json({ "msg: tutor get succccc": tutor });
  } catch (err) {
    next(err);
  }
};


export const getMyStudents = async (req, res, next) => {

  console.log("the user in tutor get students request is: ", req.user)

  if (req.user.appRole !== 'tutor') {
    return next(createError(401, 'Not Authorized!'));
  }

  try {
    // const withid = {...req.body, userId: req.user.id}
    const studenttut = await db.models.tutor.findOne({
      where: {
        id: req.user.tutor.id
      },
      include: {
        model: db.models.student,
        include: {
          model: db.models.user,
        }
      },
      // attributes: ['id', 'userId']
    });

    const resp = studenttut.students.map((student) => {
      return {
        fullName: student.user.firstName + " " + student.user.lastName,
        studentTutorId: student.studentTutor.id,
      }
    })

    console.log("the index in stuuuuu is: ", studenttut)

      res.status(201).json({ "data": resp });
  } catch (err) {
    console.error("the error in get student is: ", err)
    next(err);
  }
};

export const logSession = async (req, res, next) => {

  if (req.user.appRole !== 'tutor') {
    return next(createError(401, 'Not Authorized!'));
  }

  try {
    const session = await db.models.studentTutorSession
      .create(req.body, {
        fields: ['studentTutorId', 'startTime', 'endTime', "remark"],
      });

      res.status(201).json({ "success": true, "sessionId": session.id });
  } catch (err) {
    console.error("the error in get student is: ", err) 
    next(err);
  } 
};

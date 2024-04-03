import createError from "http-errors";

import db from "@/database";
import { mailHelper, emailTemplete } from "@/helpers";
// import { mailHelper,  } from '@/helpers';
// import { Email } from './email';

/**
 * POST /auth/login
 * Login request
 */
export const sendMail = async (req, res, next) => {

  const { email } = req.body;

  console.log("The request user in Send Mail is: ", req.body);

  const clientEmailHtml = emailTemplete.VercelInviteUserEmail({
    username: req.body["first-name"],
    lastName: req.body["last-name"],
    company: req.body["company-name"],
  });

  const clientOptions = {
    //   from: 'you@example.com',
    to: email,
    subject: "Thank you for your interest in F.O.X Events!",
    html: clientEmailHtml,
  };

  const foxOptions = {
    //   from: 'you@example.com',
    to: "forms@foxeventss.com",
    subject: "You Have Got a New Form!",
    html: clientEmailHtml,
  };


  try {
    //send email to client and fox at the same time using promise.all
    await Promise.all([mailHelper.sendMail(clientOptions), mailHelper.sendMail(foxOptions)]);
    // await mailHelper.sendMail(clientOptions);
    return res.status(200).json({ success: true, message: "The Email Has Been Sent Succefully" });
  } catch (err) {
    console.log("The error in sending mail is: ", err);
    return next(createError(400, "Email Could not be sent!"));
  }
};

// /**
//  * POST /auth/login/phone
//  * Login request
//  */
// export const loginWithPhone = async (req, res, next) => {
//   try {
//     const { phoneNumber, password } = req.body;

//     // Find user by email address

//     console.log("The Phone Number is ", phoneNumber);
//     const user = await db.models.user.findOne({ where: { phoneNumber } });
//     if (!user) {
//       return next(createError(400, "There is no user with this Phone Number!"));
//     }

//     console.log("Wait Checking Password ", user);
//     // Check user password
//     const isValidPassword = await user.validatePassword(password);
//     if (!isValidPassword) {
//       return next(createError(400, "Incorrect password!"));
//     }

//     console.log("here comes the ", user);
//     // Generate and return token
//     const token = user.generateBotToken();
//     return res.status(200).json({ token });
//   } catch (err) {
//     return next(err);
//   }
// };

// export const verifyOTP = async (req, res, next) => {
//   console.log("The request user in veryfy is: ");

//   try {
//     const { otp } = req.body;
//     const id = req.user.id;

//     if (req.user.isEmailVerified) {
//       return next(createError(400, "User already verified!"));
//     }

//     const otpdb = await db.models.otp.findOne({ where: { userId: id, otp } });
//     if (!otpdb) {
//       return next(createError(400, "OTP Could not be verified!"));
//     }

//     console.log("The otpdb is: ", otpdb);

//     // Check if the OTP has expired
//     const now = new Date();
//     if (now > otpdb.expiresAt) {
//       return next(createError(400, "OTP has expired!"));
//     }

//     // Update user email verification status
//     await db.models.user.update({ isEmailVerified: true }, { where: { id } });

//     return res.status(200).json({ message: "OTP verified successfully" });
//   } catch (err) {
//     console.log("the error in verify otp: ", err);
//     return next(err);
//   }
// };
// export const resendOTP = async (req, res, next) => {
//   // console.log("The request user in veryfy is: ");

//   try {
//     const id = req.user.id;

//     if (req.user.isEmailVerified) {
//       return next(createError(400, "User already verified! No Need to Send Again."));
//     }

//     const otpdb = await db.models.otp.findOne({ where: { userId: id, otp } });
//     if (!otpdb) {
//       return next(createError(400, "OTP Could not be verified!"));
//     }

//     console.log("The otpdb is: ", otpdb);

//     // Check if the OTP has expired
//     const now = new Date();

//     if (now < otpdb.expiresAt) {
//       return next(createError(400, "OTP Must Expire Before Resending!"));
//     }

//     const expiresAt = new Date(now.getTime() + 3 * 60000).toISOString();

//     const newOtp = tokenHelper.generateOTP();

//     // Update otp verification
//     const newotp = await db.models.otp.update({ otp: newOtp, expiresAt }, { where: { userId: id } });

//     const payload = {
//       subject: "Your New OTP for Kelem Tutors!",
//       html: `Please use <b>${newotp.getDataValue("otp")}<b/>. to get started.`,
//     };

//     mailHelper.sendMail(payload);

//     return res.status(200).json({ message: "OTP Resend Successful" });
//   } catch (err) {
//     console.log("the error in verify otp: ", err);
//     return next(err);
//   }
// };

// /**
//  * POST /auth/register
//  * Register request
//  */
// export const register = async (req, res, next) => {
//   try {
//     // Create user
//     const user = await db.models.user.create(req.body, {
//       fields: ["firstName", "lastName", "email", "password", "appRole", "phoneNumber", "gender"],
//     });

//     // console.log("The user creted is: ", user);
//     if (user) {
//       await db.models[user.dataValues.appRole].create(
//         { userId: user.dataValues.id },
//         {
//           fields: ["userId"],
//         }
//       );
//     }
//     // Generate and return tokens
//     const token = user.generateToken();
//     const refreshToken = user.generateToken("2h");
//     res.status(201).json({ token, refreshToken });
//   } catch (err) {
//     console.log("the error in register: ", err);
//     res.status(400).json({ message: "Email or Phone already in use" });
//     next();
//   }
// };

// /**
//  * GET /auth/me
//  * Get current user
//  */
// export const getCurrentUser = async (req, res, next) => {
//   try {
//     delete req.user.dataValues.password;
//     res.json(req.user);
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * PUT /auth/me
//  * Update current user
//  */
// export const updateCurrentUser = async (req, res, next) => {
//   try {
//     await req.user.update(req.body, {
//       fields: ["firstName", "lastName", "email"],
//     });
//     res.status(200).json({ success: true });
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * DELETE /auth/me
//  * Delete current user
//  */
// export const deleteCurrentUser = async (req, res, next) => {
//   try {
//     await req.user.destroy();
//     res.status(204).send();
//   } catch (err) {
//     next(err);
//   }
// };

// /**
//  * PUT /auth/me/password
//  * Update password of current user
//  */
// export const updatePassword = async (req, res, next) => {
//   try {
//     const { current, password } = req.body;

//     // Check user password
//     const isValidPassword = await req.user.validatePassword(current);
//     if (!isValidPassword) {
//       return next(createError(400, "Incorrect password!"));
//     }

//     // Update password
//     req.user.password = password;
//     await req.user.save();

//     return res.json({ success: true });
//   } catch (err) {
//     return next(err);
//   }
// };

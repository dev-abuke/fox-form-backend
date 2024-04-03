import createError from "http-errors";

// import db from "@/database";
import { mailHelper, emailTemplete } from "@/helpers";
// import { mailHelper,  } from '@/helpers';
// import { Email } from './email';

/**
 * POST /auth/form
 * Send Email
 */
export const sendMail = async (req, res, next) => {

  const { email } = req.body;

  console.log("The request user in Send Mail is: ", req.body);

  const clientEmailHtml = emailTemplete.VercelInviteUserEmail({
    username: req.body["first-name"],
    lastName: req.body["last-name"],
    company: req.body["company-name"],
  });

  const foxEmailHtml = emailTemplete.foxEmail(req.body);

  const clientOptions = {
    //   from: 'you@example.com',
    to: email,
    subject: "Thank you for your interest in F.O.X Events!",
    html: clientEmailHtml,
  };

  const foxOptions = {
    from: "F.O.X Events <no-reply@foxeventss.com>",
    to: "forms@foxeventss.com",
    subject: "You Have Got a New Form!",
    html: foxEmailHtml,
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

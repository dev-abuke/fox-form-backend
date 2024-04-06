import createError from "http-errors";

// import db from "@/database";
import { mailHelper, emailTemplete } from "@/helpers";
// import { mailHelper,  } from '@/helpers';
// import { Email } from './email';

/**
 * POST /auth/form
 * Send Email
 */

//create a function to configure email with required attributes to client and fox
const foxEmailConfig = (req, type) => {
  let foxEmailHtml = emailTemplete.foxAdminEmailTemplate(req.body, type);

  let foxOptions = {
    from: "F.O.X Events Forms <no-reply@foxeventss.com>",
    to: "forms@foxeventss.com",
    subject: "You Have Got a New " + type +" Form!",
    html: foxEmailHtml,
  };

  return foxOptions;
};

const bookVendorEmaillConfig = (req) => {
  const clientEmailHtml = emailTemplete.bookVendorEmailTemplate({
    username: req.body["first-name"],
    lastName: req.body["last-name"],
    company: req.body["company-name"],
  });

  const clientOptions = {
    from: "F.O.X Events <no-reply@foxeventss.com>",
    to: req.body.email,
    subject: "Thank You For Your Interest in F.O.X Events!",
    html: clientEmailHtml,
  };

  return clientOptions;
};

const bookPackageEmaillConfig = (req, packageType) => {
  const clientEmailHtml = emailTemplete.bookPackageEmailTemplate({
    name: req.body["name"],
    packages: packageType,
  });

  const clientOptions = {
    from: "F.O.X Events <no-reply@foxeventss.com>",
    to: req.body.email,
    subject: "Thank You For Your Interest in F.O.X Events!",
    html: clientEmailHtml,
  };

  return clientOptions;
};

const registerVendorEmaillConfig = (req, packageType) => {
  const clientEmailHtml = emailTemplete.bookPackageEmailTemplate({
    name: req.body["name"],
    packages: packageType,
  });

  const clientOptions = {
    from: "F.O.X Events <no-reply@foxeventss.com>",
    to: req.body.email,
    subject: "Thank You For Your Interest in F.O.X Events!",
    html: clientEmailHtml,
  };

  return clientOptions;
};

export const bookVendor = async (req, res, next) => {
  console.log("The request user in Book Vendor is: ", req.body);

  try {
    //send email to client and fox at the same time using promise.all
    await Promise.all([mailHelper.sendMail(bookVendorEmaillConfig(req)), mailHelper.sendMail(foxEmailConfig(req, "Vendor Booking"))]);

    return res.status(200).json({ success: true, message: "The Email Has Been Sent Successfully" });
  } catch (err) {
    console.log("The error in sending mail is: ", err);

    return next(createError(400, "Booking Email Could not be sent!"));
  }
};

export const registerVendor = async (req, res, next) => {
  console.log("The request user in Register Vendor is: ", req.body);

  try {
    //send email to client and fox at the same time using promise.all
    await Promise.all([mailHelper.sendMail(registerVendorEmaillConfig(req, "To Enable Your Business To Reach New Heights")), mailHelper.sendMail(foxEmailConfig(req, "Vendor Registration"))]);

    return res.status(200).json({ success: true, message: "The Email Has Been Sent Succefully" });
  } catch (err) {
    console.log("The error in Register Vendor is: ", err);

    return next(createError(400, "Registration Email Could not be sent!"));
  }
};

export const bookPackage = async (req, res, next) => {
  console.log("The request user in Book Product is: ", req.body);
  //clean the request body with attribute package-type of ["product-launch", "birthday", "special-holiday", "wedding", "corporate-event"]
  let packageType = req.body["package-type"];
  if (packageType === "product-launch") {
    packageType = "Product Launch Package";
  } else if (packageType === "birthday") {
    packageType = "Birthday Package";
  } else if (packageType === "special-holiday") {
    packageType = "Special Holiday Package";
  } else if (packageType === "wedding") {
    packageType = "Wedding Package";
  } else if (packageType === "corporate-event") {
    packageType = "Corporate Event Package";
  }

  try {
    //send email to client and fox at the same time using promise.all
    await Promise.all([mailHelper.sendMail(bookPackageEmaillConfig(req, packageType)), mailHelper.sendMail(foxEmailConfig(req, packageType +" Booking"))]);

    return res.status(200).json({ success: true, message: "The Email Has Been Sent Succefully" });
  } catch (err) {
    console.log("The error in Book Product is: ", err);

    return next(createError(400, "Package Booking Email Could not be sent!"));
  }
};
